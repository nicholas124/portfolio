import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="section__title">
        <span className="section__num">02.</span> Experience
      </h2>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="timeline__item">
            <div className="timeline__head">
              <h3 className="timeline__role">
                {job.role} <span>· {job.company}</span>
              </h3>
              <p className="timeline__meta">
                {job.period} · {job.location}
              </p>
            </div>

            <ul className="timeline__points">
              {job.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <ul className="card__tags">
              {job.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
