import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section__title">
        <span className="section__num">04.</span> Skills
      </h2>

      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skills__group">
            <h3>{s.group}</h3>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
