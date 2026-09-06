import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <p className="section-label">Client Feedback</p>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-sub">
          SHIV ENTERPRISES is trusted by India&apos;s most reputed
          organisations, including Nuclear Power Corporation of India and KEPCO
          Plant Services.
        </p>

        <ul className="testi-grid">
          {testimonials.map((testimonial) => (
            <Reveal as="li" className="testi-card" key={testimonial.author}>
              <p className="stars" aria-label="Rated 5 out of 5">
                <span aria-hidden="true">★★★★★</span>
              </p>
              <blockquote>
                <p className="testi-text">{testimonial.quote}</p>
              </blockquote>
              <cite className="testi-author">{testimonial.author}</cite>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
