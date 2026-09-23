import {
  Globe,
  Atom,
  Terminal,
  LayoutPanelLeft,
  Wrench,
  RefreshCw,
} from "lucide-react";
import { services } from "../data/services";
import useReveal from "../hooks/useReveal";

const ICONS = {
  web: Globe,
  react: Atom,
  python: Terminal,
  frontend: LayoutPanelLeft,
  software: Wrench,
  maintenance: RefreshCw,
};

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services">
      <div className="container" ref={ref}>
        <p className="eyebrow reveal">Services</p>
        <h2 className="section-title reveal">How I can help</h2>
        <p className="section-lead reveal">
          Practical software work, scoped to what you actually need.
        </p>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Wrench;
            return (
              <div className="service-card glass-card reveal" key={service.title}>
                <div className="service-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
