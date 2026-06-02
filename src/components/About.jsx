import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="section__title">
        <span className="section__num">01.</span> About
      </h2>
      <div className="about">
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}
