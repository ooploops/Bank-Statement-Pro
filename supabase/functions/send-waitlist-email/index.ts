// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

console.log("Hello from Functions!")

Deno.serve(async (req) => {
  try {
    const { name, email, useCase } = await req.json()
    if (!name || !email || !useCase) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 })
    }

    const postmarkApiKey = Deno.env.get("POSTMARK_API_KEY")
    if (!postmarkApiKey) {
      return new Response(JSON.stringify({ error: "Postmark API key not set" }), { status: 500 })
    }

    const postmarkPayload = {
      From: "YOUR_FROM_EMAIL@yourdomain.com", // <-- Replace with your verified sender
      To: "YOUR_RECEIVE_EMAIL@yourdomain.com", // <-- Replace with your email
      Subject: "New Waitlist Signup: Bank Statement Pro",
      TextBody: `Name: ${name}\nEmail: ${email}\nUse Case / Industry: ${useCase}`,
      MessageStream: "outbound"
    }

    const postmarkRes = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": postmarkApiKey
      },
      body: JSON.stringify(postmarkPayload)
    })

    if (!postmarkRes.ok) {
      const error = await postmarkRes.text()
      return new Response(JSON.stringify({ error: "Failed to send email", details: error }), { status: 500 })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid request", details: e.message }), { status: 400 })
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-waitlist-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
