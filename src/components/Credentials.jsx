import { education, certifications } from '../data/content.js'

export default function Credentials() {
  return (
    <section id="credentials" className="section container">
      <h2 className="section__title">
        <span className="section__num">04.</span> Education &amp; Certifications
      </h2>

      <div className="credentials">
        <div className="credentials__col">
          <h3 className="credentials__subtitle">Education</h3>
          {education.map((e) => (
            <div key={e.school} className="edu">
              <h4 className="edu__degree">{e.degree}</h4>
              <p className="edu__school">{e.school}</p>
              <p className="edu__period">{e.period}</p>
              {e.notes.length > 0 && (
                <ul className="edu__notes">
                  {e.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="credentials__col">
          <h3 className="credentials__subtitle">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name} className="cert">
                <span className="cert__name">{c.name}</span>
                <span className="cert__meta">
                  {c.issuer} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
