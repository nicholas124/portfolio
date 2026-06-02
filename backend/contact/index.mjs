import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

// @aws-sdk/client-ses ships with the Lambda nodejs20.x runtime — no bundling needed.
const ses = new SESClient({})
const SENDER = process.env.SENDER
const RECIPIENT = process.env.RECIPIENT

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    const name = String(body.name || '').trim().slice(0, 200)
    const email = String(body.email || '').trim().slice(0, 200)
    const message = String(body.message || '').trim().slice(0, 5000)

    if (!name || !email || !message) return json(400, { error: 'missing_fields' })
    if (!EMAIL_RE.test(email)) return json(400, { error: 'invalid_email' })

    await ses.send(
      new SendEmailCommand({
        Source: SENDER,
        Destination: { ToAddresses: [RECIPIENT] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `Portfolio contact from ${name}` },
          Body: {
            Text: { Data: `From: ${name} <${email}>\n\n${message}` },
          },
        },
      }),
    )
    return json(200, { ok: true })
  } catch (err) {
    console.error('contact error', err)
    return json(500, { error: 'send_failed' })
  }
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  }
}
