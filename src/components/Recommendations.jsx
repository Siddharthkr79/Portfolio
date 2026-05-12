import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    id: 1,
    name: "Ananya Singh",
    role: "Product Designer",
    quote: "Siddharth delivered a clean, responsive interface with strong attention to detail.",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Tech Lead",
    quote: "Great collaboration and very reliable on front-end implementation quality.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: 3,
    name: "Neha Sharma",
    role: "Project Manager",
    quote: "Communication was excellent and every update matched design expectations.",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

const Recommendations = () => {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visible = useMemo(() => {
    const nextIndex = index === testimonials.length - 1 ? 0 : index + 1;
    return [testimonials[index], testimonials[nextIndex]];
  }, [index]);

  return (
    <section className="recommendations">
      <div className="recommendations-header">
        <h2>Recommendations</h2>
        <div className="recommendations-actions">
          <button type="button" onClick={previous} aria-label="Previous recommendation">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" onClick={next} aria-label="Next recommendation">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="recommendations-track">
        {visible.map((item) => (
          <article key={item.id} className="testimonial-card">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <FontAwesomeIcon key={starIndex} icon={faStar} />
              ))}
            </div>
            <p>{item.quote}</p>
            <div className="testimonial-user">
              <img src={item.avatar} alt={item.name} loading="lazy" />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="recommendation-dots">
        {testimonials.map((item, dotIndex) => (
          <button
            type="button"
            key={item.id}
            className={dotIndex === index ? "active-dot" : ""}
            aria-label={`Go to recommendation ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
