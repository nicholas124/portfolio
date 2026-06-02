import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import { recordVisit } from '../lib/api.js'

export default function Footer() {
  const [visits, setVisits] = useState(null)

  useEffect(() => {
    let alive = true
    recordVisit().then((count) => {
      if (alive && count !== null) setVisits(count)
    })
    return () => {
      alive = false
    }
  }, [])

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__socials">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer__credit">
          Built with React + AWS · Designed &amp; coded by {profile.name}
        </p>
        {visits !== null && (
          <p className="footer__visits" aria-live="polite">
            {visits.toLocaleString()} visits
          </p>
        )}
      </div>
    </footer>
  )
}
