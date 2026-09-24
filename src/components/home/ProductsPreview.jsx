import { Link } from "react-router-dom";

function ProductsPreview() {
  const solutions = [
    {
      number: "01",
      title: "Boiler Pressure Parts",
      description:
        "Boiler pressure components from RIBO Industries, supplied by PSSPL as Authorised Dealer for Maharashtra.",
      image: "/images/ribo/products/ribo-water-wall-panel.webp",
      alt: "RIBO boiler pressure component",
      to: "/products",
      action: "Explore Products →",
      imageMode: "contain"
    },

    {
      number: "02",
      title: "Industrial Spare Parts",
      description:
        "Mechanical, electrical and maintenance spares supporting critical industrial operations.",
      image: "/images/home/industrial-spare-parts.webp",
      alt: "Industrial spare parts",
      to: "/products",
      action: "Explore Products →"
    },

    {
      number: "03",
      title: "Industrial Equipment",
      description:
        "Industrial equipment sourced through established manufacturer and supplier relationships.",
      image: "/images/home/industrial-equipment.webp",
      alt: "Industrial equipment",
      to: "/products",
      action: "Explore Products →"
    },

    {
      number: "04",
      title: "Engineering & Project Solutions",
      description:
        "Support for industrial projects, procurement, maintenance and engineering requirements.",
      image: "/images/home/engineering-project-solutions.webp",
      alt: "Industrial engineering and project support",
      to: "/services",
      action: "Explore Services →"
    }
  ];


  return (
    <section className="section products-preview">

      <div className="container">

        <div className="products-preview-header">

          <div>

            <span className="section-subtitle">
              PRODUCTS & SOLUTIONS
            </span>

            <h2>
              Industrial Products, Equipment &amp; Project Solutions
            </h2>

          </div>

          <Link
            to="/products"
            className="text-link"
          >
            Explore Products →
          </Link>

        </div>


        <div className="solutions-grid">

          {solutions.map((solution) => (

            <article
              className="solution-card"
              key={solution.number}
            >

              <div
                className={`solution-image${solution.imageMode ? ` solution-image--${solution.imageMode}` : ""}`}
              >
                <img src={solution.image} alt={solution.alt} />
              </div>

              <div className="solution-card-content">

              <span className="solution-number">
                {solution.number}
              </span>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <Link
                to={solution.to}
                className="solution-link"
              >
                {solution.action}
              </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductsPreview;
