import { Github } from "lucide-react";
import useReveal from "../hooks/useReveal";

const FEATURES = [
  "Version control",
  "Branch management",
  "Collaboration",
  "Pull requests",
  "Code sharing",
  "Project management",
];

export default function GitHubSection() {
  const ref = useReveal();

  return (
    <section id="github">
      <div className="container" ref={ref}>
        <div className="github-banner reveal">
          <Github className="github-banner-icon" strokeWidth={1.5} />
          <h2>Code. Build. Commit. Push.</h2>
          <p>
            I use Git and GitHub to manage every project I build — from
            version control and branching to collaboration and code review.
          </p>
          <div className="github-features">
            {FEATURES.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <a
            href="https://github.com/benson-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Github size={16} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
