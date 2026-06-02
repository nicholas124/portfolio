import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section__title">
        <span className="section__num">03.</span> Projects
      </h2>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className={`project ${p.featured ? 'project--featured' : ''}`}>
            {p.image && (
              <a
                className="project__media"
                href={p.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} architecture diagram`}
              >
                <img src={p.image} alt={`${p.title} architecture diagram`} loading="lazy" />
              </a>
            )}

            <div className="project__body">
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>

              <ul className="card__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="project__links">
                {p.demo && (
                  <a className="btn btn--sm" href={p.demo} target="_blank" rel="noreferrer">
                    Live site ↗
                  </a>
                )}
                {p.repo && (
                  <a className="btn btn--ghost btn--sm" href={p.repo} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
