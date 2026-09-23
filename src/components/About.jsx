import useReveal from "../hooks/useReveal";

const INTERESTS = [
  "Web Development",
  "Software Engineering",
  "Backend Development",
  "Problem Solving",
  "APIs",
  "Database-Driven Apps",
  "Practical Software",
  "Learning New Tech",
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about">
      <div className="container about-grid" ref={ref}>
        <div className="about-text reveal">
          <p className="eyebrow">About</p>
          <h2 className="section-title">Building things that work</h2>
          <p>
            Benson is passionate about software development and enjoys
            turning ideas into functional applications. He's a software
            engineering student who likes learning by building — picking a
            problem, writing the code, and seeing it actually work.
          </p>
          <p>
            He's especially drawn to backend development and the logic that
            sits behind an interface: structuring data, wiring up APIs, and
            making sure the pieces of an application fit together cleanly.
          </p>

          <div className="about-interests">
            {INTERESTS.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </div>

        <div className="profile-card glass-card reveal">
          <div className="profile-card-avatar">BM</div>
          <h3>Benson Maina</h3>
          <p className="role">Software Developer</p>
          <dl>
            <dt>Name</dt>
            <dd>Benson Maina</dd>
            <dt>Role</dt>
            <dd>Software Developer</dd>
            <dt>Focus</dt>
            <dd>Software Engineering</dd>
            <dt>Location</dt>
            <dd>Kenya</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
