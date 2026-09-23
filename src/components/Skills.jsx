import { useEffect } from "react";
import {
  Atom,
  Braces,
  FileCode2,
  Palette,
  Terminal as TerminalIcon,
  Coffee,
  GitBranch,
  Github as GithubIcon,
  SquareTerminal,
  MonitorSmartphone,
  Plug,
  FileJson,
  Repeat,
} from "lucide-react";
import { skillGroups } from "../data/skills";
import useReveal from "../hooks/useReveal";

const ICONS = {
  react: Atom,
  js: Braces,
  html: FileCode2,
  css: Palette,
  python: TerminalIcon,
  java: Coffee,
  git: GitBranch,
  github: GithubIcon,
  terminal: SquareTerminal,
  linux: MonitorSmartphone,
  api: Plug,
  json: FileJson,
  crud: Repeat,
};

export default function Skills() {
  const ref = useReveal();

  // animate each skill bar's width once it enters the viewport
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-bar-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.transform = `scaleX(${bar.dataset.level / 5})`;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">Skills</p>
        <h2 className="section-title reveal">What I work with</h2>
        <p className="section-lead reveal">
          Areas I have hands-on experience in and am continuing to build on —
          not a claim of mastery, just an honest picture of where I am today.
        </p>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group glass-card reveal">
              <h3>{group.category}</h3>
              {group.items.map((skill) => {
                const Icon = ICONS[skill.icon] || Braces;
                return (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-head">
                      <span className="skill-item-name">
                        <span className="skill-icon">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        {skill.name}
                      </span>
                    </div>
                    <p className="skill-desc">{skill.description}</p>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
