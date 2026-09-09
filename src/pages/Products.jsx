import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";
import CTA from "../components/home/CTA";

function Products() {
  const otherSolutions = [
    {
      title: "Industrial Spare Parts",
      description:
        "Reliable mechanical, electrical and maintenance spares for critical industrial operations."
    },
    {
      title: "Industrial Equipment",
      description:
        "Industrial products and equipment sourced through our trusted manufacturing and supplier network."
    },
    {
      title: "Electrical Products",
      description:
        "Electrical service and maintenance products supporting industrial systems, including our Bharat Bijlee partnership."
    },
    {
      title: "Engineering & Project Solutions",
      description:
        "Support for industrial projects, procurement, maintenance and specialized engineering requirements."
    }
  ];

  return (
    <>
      <PageHero
        title="Products & Solutions"
        subtitle="INDUSTRIAL SUPPLY & ENGINEERING SOLUTIONS"
      />

      {/* BOILER PRESSURE PARTS — RIBO */}
      <section className="section products-page">
        <div className="container">

          <SectionTitle
            subtitle="FEATURED PRODUCT LINE — RIBO INDUSTRIES"
            title="Boiler Pressure Parts"
            description="As RIBO Industries' Maharashtra distributor, we supply high-pressure boiler components and engineered parts for power generation and process industries."
          />

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

      {/* OTHER SOLUTION CATEGORIES */}
      <section className="section other-solutions-section">
        <div className="container">

          <SectionTitle
            subtitle="BEYOND BOILER PARTS"
            title="Other Products & Solutions"
            description="PSSPL's supply network extends well beyond boiler components to cover a wider range of industrial needs."
          />

          <div className="solutions-grid">
            {otherSolutions.map((solution) => (
              <div className="solution-card" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}

export default Products;