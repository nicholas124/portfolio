import { useState } from 'react'
import { profile } from '../data/content.js'
import { sendContactMessage } from '../lib/api.js'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  // status: 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')
  const [note, setNote] = useState('')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setNote('')
    try {
      await sendContactMessage(form)
      setStatus('sent')
      setForm(initial)
    } catch (err) {
      if (err.message === 'NO_BACKEND') {
        // Backend not wired yet — hand off to the user's mail client.
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
        setStatus('idle')
        return
      }
      setStatus('error')
      setNote('Something went wrong. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="section section--narrow container">
      <h2 className="section__title section__title--center">
        <span className="section__num">06.</span> Get in touch
      </h2>
      <p className="contact__lede">
        Have a question or want to work together? Drop me a message and I'll get back to you.
      </p>

      {status === 'sent' ? (
        <p className="contact__success" role="status">
          ✓ Thanks — your message is on its way. I'll be in touch soon.
        </p>
      ) : (
        <form className="contact__form" onSubmit={onSubmit}>
          <div className="contact__row">
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                autoComplete="name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={5}
              required
            />
          </label>

          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {note && (
            <p className="contact__error" role="alert">
              {note}
            </p>
          )}
        </form>
      )}
    </section>
  )
}
