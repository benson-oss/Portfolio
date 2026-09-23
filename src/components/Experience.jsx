import { journey } from "../data/experience";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">Journey</p>
        <h2 className="section-title reveal">How I got here</h2>
        <p className="section-lead reveal">
          Still early in the journey, and building consistently — here's the
          path so far.
        </p>

        <div className="timeline">
          {journey.map((item) => (
            <div className="timeline-item reveal" key={item.period}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
