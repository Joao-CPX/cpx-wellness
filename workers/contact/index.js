const ALLOWED_ORIGINS = [
  'https://wellness.cellpowerx.com',
  'https://wellnesscenter.cellpowerx.com',
  'https://cpx-wellness.pages.dev',
  'https://cpx-wellness.vercel.app',
  'http://localhost:4321',
  'http://localhost:4332',
];

const corsHeaders = (request) => {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
};

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default {
  async fetch(request, env) {
    const headers = { ...corsHeaders(request), 'Content-Type': 'application/json' };
    const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers });

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    if (!ALLOWED_ORIGINS.includes(request.headers.get('Origin'))) {
      return json({ error: 'Forbidden' }, 403);
    }

    try {
      const { name, email, phone, message, consent, turnstileToken } = await request.json();

      if (!name || !email || !String(email).includes('@')) {
        return json({ error: 'Name and email required' }, 400);
      }

      // Cloudflare Turnstile, enforced once TURNSTILE_SECRET is configured
      if (env.TURNSTILE_SECRET) {
        const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          body: new URLSearchParams({
            secret: env.TURNSTILE_SECRET,
            response: turnstileToken || '',
            remoteip: request.headers.get('CF-Connecting-IP') || '',
          }),
        });
        const outcome = await verify.json().catch(() => ({}));
        if (!outcome.success) {
          return json({ error: 'Verification failed' }, 403);
        }
      }

      // 1. Send notification email via Brevo
      const notifyRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'CPX Wellness Website', email: 'noreply@cellpowerx.com' },
          to: [{ email: env.NOTIFY_EMAIL }],
          replyTo: { email, name },
          subject: `New Contact: ${String(name).slice(0, 100)}`,
          htmlContent: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone) || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br>') || 'No message'}</p>
            <hr>
            <p><small>Marketing consent: ${consent ? 'Yes' : 'No'}</small></p>
          `,
        }),
      });

      if (!notifyRes.ok) {
        return json({ error: 'Could not send message' }, 502);
      }

      // 2. Add to Brevo contact list only with explicit marketing consent
      if (consent === true) {
        await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'api-key': env.BREVO_API_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            attributes: { FIRSTNAME: name.split(' ')[0], LASTNAME: name.split(' ').slice(1).join(' '), SMS: phone },
            listIds: [parseInt(env.BREVO_LIST_ID)],
            updateEnabled: true,
          }),
        });
      }

      return json({ success: true });
    } catch (err) {
      return json({ error: 'Server error' }, 500);
    }
  },
};
