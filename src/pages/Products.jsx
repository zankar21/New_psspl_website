import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import ProductCard from "../components/products/ProductCard";

import { products } from "../data/products";

import CTA from "../components/home/CTA";


function Products() {

  const otherSolutions = [
    {
      number: "01",
      title: "Industrial Spare Parts",
      description:
        "Reliable mechanical, maintenance and replacement spare parts for critical industrial operations.",
      applications:
        [
          "Power Plants",
          "Steel Plants",
          "Cement Plants",
          "Mining Operations"
        ]
    },

    {
      number: "02",
      title: "Industrial Equipment",
      description:
        "Industrial equipment and components sourced through our trusted manufacturing and supplier network.",
      applications:
        [
          "Mechanical Equipment",
          "Process Equipment",
          "Plant Components",
          "Maintenance Equipment"
        ]
    },

    {
      number: "03",
      title: "Electrical Products",
      description:
        "Electrical service, maintenance and industrial products supporting critical plant infrastructure.",
      applications:
        [
          "Electrical Systems",
          "Transformers",
          "Automation",
          "Maintenance Products"
        ]
    },

    {
      number: "04",
      title: "Engineering & Project Solutions",
      description:
        "Support for industrial projects, procurement, maintenance and specialized engineering requirements.",
      applications:
        [
          "Project Procurement",
          "Engineering Support",
          "Maintenance Solutions",
          "Industrial Sourcing"
        ]
    }
  ];


  return (
    <>
      {/* ================= PAGE HERO ================= */}

      <PageHero
        title="Products & Solutions"
        subtitle="INDUSTRIAL SUPPLY & ENGINEERING SOLUTIONS"
      />


      {/* ================= INTRODUCTION ================= */}

      <section className="section products-intro-section">

        <div className="container products-intro-content">

          <span className="section-subtitle">
            COMPREHENSIVE INDUSTRIAL SOLUTIONS
          </span>

          <h2>
            Products and Solutions for Critical Industrial Operations
          </h2>

          <p>
            Pawanssiddhi Supplier Pvt Ltd provides industrial
            products, spare parts, equipment and engineering
            solutions through its network of principals,
            manufacturers and strategic partners.
          </p>

        </div>

      </section>


      {/* ================= RIBO FEATURED PRODUCT LINE ================= */}

      <section className="section products-page">

        <div className="container">


          <div className="ribo-products-header">

            <div>

              <span className="section-subtitle">
                FEATURED PRODUCT LINE
              </span>

              <h2>
                Boiler Pressure Parts
              </h2>

              <p>
                Through our Maharashtra distributorship with
                RIBO Industries, PSSPL supplies high-pressure
                boiler components and engineered pressure parts
                for power generation and process industries.
              </p>

            </div>


            <Link
              to="/partners"
              className="text-link"
            >
              About Our RIBO Partnership →
            </Link>

          </div>


          {/* RIBO INFO STRIP */}

          <div className="ribo-info-strip">

            <div>
              <strong>RIBO Industries</strong>
              <span>Manufacturing Partner</span>
            </div>

            <div>
              <strong>Maharashtra</strong>
              <span>Distribution Territory</span>
            </div>

            <div>
              <strong>Boiler Pressure Parts</strong>
              <span>Featured Product Category</span>
            </div>

          </div>


          {/* PRODUCT GRID */}

          <div className="products-grid products-page-grid">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================= OTHER SOLUTIONS ================= */}

      <section className="section other-solutions-section">

        <div className="container">


          <SectionTitle
            subtitle="BEYOND BOILER PRESSURE PARTS"
            title="Other Products & Industrial Solutions"
            description="Our supply and engineering capabilities extend beyond boiler components to support a wider range of industrial requirements."
          />


          <div className="other-solutions-grid">

            {otherSolutions.map((solution) => (

              <article
                className="other-solution-card"
                key={solution.title}
              >

                <div className="solution-card-header">

                  <span className="solution-number">
                    {solution.number}
                  </span>

                </div>


                <h3>
                  {solution.title}
                </h3>


                <p>
                  {solution.description}
                </p>


                <div className="solution-applications">

                  {solution.applications.map((application) => (

                    <span key={application}>
                      {application}
                    </span>

                  ))}

                </div>


                <Link
                  to="/contact"
                  className="solution-enquiry-link"
                >
                  Enquire Now →
                </Link>

              </article>

            ))}

          </div>


          <div className="custom-requirement-box">

            <div>

              <span className="section-subtitle">
                CUSTOM INDUSTRIAL REQUIREMENTS
              </span>

              <h3>
                Looking for a Specific Product or Spare Part?
              </h3>

              <p>
                Share your technical requirement with our team.
                Through our industrial supply network, we can
                support sourcing and procurement for specialized
                industrial requirements.
              </p>

            </div>


            <Link
              to="/contact"
              className="btn-primary"
            >
              Send Your Requirement
            </Link>

          </div>


        </div>

      </section>


      <CTA />

    </>
  );
}


export default Products;