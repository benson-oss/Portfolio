import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, projectFilters } from "../data/projects";
import useReveal from "../hooks/useReveal";

const THUMB_COLORS = [
  "linear-gradient(155deg, rgba(123,110,246,0.35), rgba(34,211,180,0.15))",
  "linear-gradient(155deg, rgba(34,211,180,0.35), rgba(123,110,246,0.15))",
  "linear-gradient(155deg, rgba(245,182,87,0.3), rgba(123,110,246,0.15))",
];

export default function Projects() {
  const ref = useReveal();
  const [filter, setFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tag === filter);
  }, [filter]);

  return (
    <section id="projects">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">Projects</p>
        <h2 className="section-title reveal">Things I've built</h2>
        <p className="section-lead reveal">
          A mix of frontend, backend and full applications — built to
          practice real concepts, not just tutorials.
        </p>

        <div className="project-filters reveal">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, i) => (
            <article
              className="project-card glass-card reveal"
              key={project.id}
            >
              <div
                className="project-thumb"
                style={{ "--thumb-bg": THUMB_COLORS[i % THUMB_COLORS.length] }}
              >
                <span>{project.id}/</span>
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                  >
                    <Github size={14} style={{ marginRight: 6, verticalAlign: "-2px" }} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink
                        size={14}
                        style={{ marginRight: 6, verticalAlign: "-2px" }}
                      />
                      Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
