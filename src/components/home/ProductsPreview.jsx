import { Link } from "react-router-dom";

function ProductsPreview() {
  const solutions = [
    {
      number: "01",
      title: "Boiler Pressure Parts",
      description:
        "High-pressure boiler components from RIBO Industries, supplied by PSSPL as Authorised Dealer for Maharashtra."
    },

    {
      number: "02",
      title: "Industrial Spare Parts",
      description:
        "Reliable mechanical, electrical and maintenance spares for critical industrial operations."
    },

    {
      number: "03",
      title: "Industrial Equipment",
      description:
        "Industrial products and equipment sourced through our trusted manufacturing and supplier network."
    },

    {
      number: "04",
      title: "Engineering & Project Solutions",
      description:
        "Support for industrial projects, procurement, maintenance and specialized engineering requirements."
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
              Comprehensive Industrial Supply Solutions
            </h2>

          </div>

          <Link
            to="/products"
            className="text-link"
          >
            View All Solutions →
          </Link>

        </div>


        <div className="solutions-grid">

          {solutions.map((solution) => (

            <div
              className="solution-card"
              key={solution.number}
            >

              <span className="solution-number">
                {solution.number}
              </span>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <Link
                to="/products"
                className="solution-link"
              >
                Explore Solution →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductsPreview;
