import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import useReveal from "../hooks/useReveal";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // This form is UI-only for now — wire it up to an email service
      // (e.g. Formspree, EmailJS) or your own backend to actually send mail.
      setStatus("sent");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="container contact-grid" ref={ref}>
        <div className="contact-info reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let's build something great together</h2>
          <p>Have a project in mind? I'd love to hear about it.</p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <Mail size={16} />
              </span>
              <span>
                <span className="label">Email</span>
                <a className="value" href="mailto:irungubenson2745@gmail.com">
                  irungubenson2745@gmail.com
                </a>
              </span>
            </li>
            <li>
              <span className="contact-icon">
                <Phone size={16} />
              </span>
              <span>
                <span className="label">Phone</span>
                <a className="value" href="tel:+254745779537">
                  0745 779 537
                </a>
              </span>
            </li>
            <li>
              <span className="contact-icon">
                <Github size={16} />
              </span>
              <span>
                <span className="label">GitHub</span>
                <a
                  className="value"
                  href="https://github.com/benson-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/bensonmaina
                </a>
              </span>
            </li>
            <li>
              <span className="contact-icon">
                <Linkedin size={16} />
              </span>
              <span>
                <span className="label">LinkedIn</span>
                <a
                  className="value"
                  href="https://www.linkedin.com/in/benson-maina-6216a6394/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/benson-maina
                </a>
              </span>
            </li>
            <li>
              <span className="contact-icon">
                <MapPin size={16} />
              </span>
              <span>
                <span className="label">Location</span>
                <span className="value">Kenya</span>
              </span>
            </li>
          </ul>
        </div>

        <form
          className="contact-form glass-card reveal"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-row">
            <div className={`form-field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
          </div>

          <div className={`form-field ${errors.subject ? "has-error" : ""}`}>
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
            />
            {errors.subject && <p className="form-error">{errors.subject}</p>}
          </div>

          <div className={`form-field ${errors.message ? "has-error" : ""}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
            />
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Send Message
          </button>
          {status === "sent" && (
            <p className="form-status">
              Message ready — connect a form service to deliver it to your inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
