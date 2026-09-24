import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import ProductCard from "../components/products/ProductCard";

import { products } from "../data/products";
import {
  principals,
  getPrincipalRelationship
} from "../data/principals";

import CTA from "../components/home/CTA";


function Products() {

  const principalProductGroups = principals
    .map((principal) => ({
      principal,
      products: products.filter(
        (product) => product.principalSlug === principal.slug
      )
    }))
    .filter((group) => group.products.length > 0);

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
        title="Products"
        subtitle="INDUSTRIAL SUPPLY & ENGINEERING SOLUTIONS"
        artworkSrc="/images/products-hero.webp"
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


      {/* ================= PRINCIPAL PRODUCT LINES ================= */}

      <section className="section products-page">

        <div className="container">


          {principalProductGroups.map(({ principal, products: principalProducts }) => (
            <div className="principal-products-group" key={principal.slug}>

          <div className="principal-products-header">

            <div>

              <span className="section-subtitle">
                FEATURED PRODUCT LINE
              </span>

              <h2>{principal.productCategories.join(" & ")}</h2>

              <p>{principal.description}</p>

            </div>


            <Link
              to={principal.detailRoute}
              className="text-link"
            >
              About {principal.name} →
            </Link>

          </div>


          {/* PRINCIPAL INFO STRIP */}

          <div className="principal-info-strip">

            <div>
              <strong>{principal.name}</strong>
              <span>Manufacturer / Principal</span>
            </div>

            <div>
              <strong>{getPrincipalRelationship(principal)}</strong>
              <span>PSSPL</span>
            </div>

            <div>
              <strong>{principal.productCategories.join(" & ")}</strong>
              <span>Product Category</span>
            </div>

          </div>


          {/* PRODUCT GRID */}

          <div className="products-grid products-page-grid">

            {principalProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

            </div>
          ))}

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
