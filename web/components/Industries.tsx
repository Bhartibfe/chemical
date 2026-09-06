import Reveal from "./Reveal";
import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <p className="section-label">Who We Serve</p>
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-sub">
          SHIV ENTERPRISES supplies critical chemicals to {industries.length} of
          India&apos;s most essential sectors, including water treatment plants,
          power plants, Indian Railways, and defence.
        </p>

        <ul className="industries-grid">
          {industries.map((industry) => (
            <Reveal as="li" className="industry-card" key={industry.name}>
              <span className="industry-icon" aria-hidden="true">
                {industry.icon}
              </span>
              <h3 className="industry-name">{industry.name}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
