// Wellness site + cellpowerx.com Shopify footer (list #6)
const ALLOWED_ORIGINS = [
  'https://wellnesscenter.cellpowerx.com',
  'https://cpx-wellness.pages.dev',
  'https://cpx-wellness.vercel.app',
  'https://www.cellpowerx.com',
  'https://cellpowerx.com',
  'http://localhost:4321',
  'http://localhost:4332',
];

export default {
  async scheduled(event, env, ctx) {
    await fetch('https://api.brevo.com/v3/account', {
      headers: { 'api-key': env.BREVO_API_KEY, 'Accept': 'application/json' },
    });
  },

  async fetch(request, env) {
    // CORS headers
    const origin = request.headers.get('Origin');
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { email, listId } = await request.json();

      if (typeof email !== 'string' || !email.includes('@')) {
        return new Response(JSON.stringify({ error: 'Invalid email' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Allow list #19 (wellness) or #6 (cellpowerx.com) - default to 19
      const allowedLists = [6, 19];
      const targetList = allowedLists.includes(listId) ? listId : 19;

      // Double opt-in: once BREVO_DOI_TEMPLATE_ID is set, Brevo emails a
      // confirmation link and only adds the contact after it is clicked
      if (env.BREVO_DOI_TEMPLATE_ID) {
        const doiRes = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
          method: 'POST',
          headers: {
            'api-key': env.BREVO_API_KEY,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            email,
            includeListIds: [targetList],
            templateId: parseInt(env.BREVO_DOI_TEMPLATE_ID),
            redirectionUrl: env.DOI_REDIRECT_URL || `${origin}/`,
          }),
        });

        return new Response(JSON.stringify(doiRes.ok ? { success: true, pending: true } : { error: 'Subscription failed' }), {
          status: doiRes.ok ? 200 : 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Add contact to Brevo list
      const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listIds: [targetList],
          updateEnabled: true,
        }),
      });

      const brevoData = await brevoRes.json().catch(() => ({}));

      if (brevoRes.ok || brevoRes.status === 204) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Contact already exists - still success
      if (brevoRes.status === 400 && brevoData?.message?.includes('already exist')) {
        return new Response(JSON.stringify({ success: true, existing: true }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ error: 'Subscription failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
