import Reveal from "./Reveal";
import { clients } from "@/lib/content";

export default function Clients() {
  return (
    <section id="clients">
      <div className="container">
        <p className="section-label">Our Clients</p>
        <h2 className="section-title">Valued Partners</h2>
        <p className="section-sub">
          SHIV ENTERPRISES serves India&apos;s most prestigious government and
          private institutions, from Indian Railways to Nuclear Fuel Complex.
        </p>

        <ul className="clients-grid">
          {clients.map((client) => (
            <Reveal as="li" className="client-card" key={client.name}>
              <span className="client-dot" aria-hidden="true">
                {client.initials}
              </span>
              <span className="client-name">{client.name}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
