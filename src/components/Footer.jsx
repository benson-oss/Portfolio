import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Benson<span>.</span>Maina
            </div>
            <p className="footer-brand-role">Software Developer</p>
          </div>

          <nav className="footer-links">
            {LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            <a
              href="https://github.com/benson-oss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/benson-maina-6216a6394/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a href="mailto:irungubenson2745@gmail.com" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Benson Maina. All rights reserved.</span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}
