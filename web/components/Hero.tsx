import { site, stats } from "@/lib/site";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <p className="hero-tag">{site.certification} Certified</p>

      <h1>
        Industrial <span>Chemical</span>
        <br />
        Solutions
      </h1>

      {/* Answer-first and entity-explicit: an AI engine can quote this one
          sentence and it still names the company, the credential, the place,
          and the sectors served. */}
      <p className="hero-lead">
        SHIV ENTERPRISES is an {site.certification} certified industrial
        chemical supplier based in Sardulgarh, Punjab, serving power, water
        treatment, defence, and textile sectors across India.
      </p>

      <div className="hero-btns">
        <a href="#contact" className="btn-primary">
          Get a Quote
        </a>
        <a href="#products" className="btn-outline">
          View Products
        </a>
      </div>

      <dl className="hero-stats">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <dt className="visually-hidden">{stat.label}</dt>
            <dd className="stat-num">{stat.num}</dd>
            <dd className="stat-lbl" aria-hidden="true">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
