export default {
  async fetch(request, env) {
    // CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const { name, email, phone, message, consent } = await request.json();

      if (!name || !email) {
        return new Response(JSON.stringify({ error: 'Name and email required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }

      // 1. Send notification email via Brevo
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'CPX Wellness Website', email: 'noreply@cellpowerx.com' },
          to: [{ email: env.NOTIFY_EMAIL }],
          replyTo: { email, name },
          subject: `New Contact: ${name}`,
          htmlContent: `
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p>${message || 'No message'}</p>
            <hr>
            <p><small>Marketing consent: ${consent ? 'Yes' : 'No'}</small></p>
          `,
        }),
      });

      // 2. Add to Brevo contact list if consent given
      if (consent) {
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

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }
  },
};
