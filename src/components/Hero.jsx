import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const CODE_LINES = [
  '<span class="kw">const</span> <span class="fn">developer</span> = {',
  '&nbsp;&nbsp;name: <span class="str">"Benson Maina"</span>,',
  '&nbsp;&nbsp;role: <span class="str">"Software Developer"</span>,',
  '&nbsp;&nbsp;location: <span class="str">"Kenya"</span>,',
  "&nbsp;&nbsp;skills: [",
  '&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"React"</span>, <span class="str">"Python"</span>, <span class="str">"JavaScript"</span>,',
  '&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">"Java"</span>, <span class="str">"HTML"</span>, <span class="str">"CSS"</span>',
  "&nbsp;&nbsp;],",
  '&nbsp;&nbsp;<span class="fn">isLearning</span>: <span class="kw">true</span>,',
  "};",
];

export default function Hero() {
  const [lines, setLines] = useState([]);
  const bodyRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setLines(CODE_LINES);
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setLines(CODE_LINES.slice(0, index));
      if (index >= CODE_LINES.length) clearInterval(timer);
    }, 220);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div>
        <p className="hero-kicker">// Hi, I'm Benson Maina</p>
        <h1>
          Software <span className="accent">Developer</span>
        </h1>
        <p className="hero-role">Problem Solver · Builder</p>
        <p className="hero-intro">
          I build practical, responsive and user-focused software
          applications using modern web and programming technologies —
          turning ideas into working software through code, creativity and
          continuous learning.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Let's Work Together
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/bensonmaina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/benson-maina-6216a6394/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a href="mailto:irungubenson2745@gmail.com" aria-label="Send an email">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="hero-visual reveal is-visible">
        <div className="hero-panel">
          <div className="hero-panel-bar">
            <span className="dot r"></span>
            <span className="dot y"></span>
            <span className="dot g"></span>
            <span className="file">developer.js</span>
          </div>
          <div className="hero-panel-body" ref={bodyRef}>
            {lines.map((line, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
            <span className="hero-caret"></span>
          </div>
          <div className="hero-stats">
            <div>
              <strong>6+</strong>
              <span>TECHNOLOGIES</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>PROJECTS</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>CURIOSITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
