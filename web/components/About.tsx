import { aboutBadges, commitments } from "@/lib/content";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              Your Trusted Chemical Solution Partner
            </h2>

            <p className="about-body">
              SHIV ENTERPRISES is an industrial chemical supplier based in
              Sardulgarh, Mansa, Punjab, delivering high-purity chemical
              solutions to India&apos;s most critical industries — from nuclear
              power plants to railways and defence.
            </p>
            <p className="about-body">
              Every product SHIV ENTERPRISES supplies meets strict quality
              benchmarks. Our experienced team ensures reliable delivery,
              precise specifications, and full technical support.
            </p>

            <ul className="about-badges">
              {aboutBadges.map((badge) => (
                <li className="badge" key={badge}>
                  <span className="badge-dot" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>

            <p className="about-cta">
              <a href="/brochure.pdf" download className="btn-outline btn-sm">
                <span aria-hidden="true">↓</span> Download Brochure
              </a>
            </p>
          </div>

          <div className="about-card">
            <p className="iso-badge">
              <span className="iso-icon" aria-hidden="true">
                ✦
              </span>
              <span className="iso-text">
                {site.certification} Certified Quality Management
              </span>
            </p>

            <h3>Our Commitment</h3>

            <ul className="commitment-list">
              {commitments.map((item) => (
                <li className="commitment-item" key={item.title}>
                  <span className="commitment-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>
                    <span className="commitment-title">{item.title}</span>
                    <span className="commitment-desc">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
