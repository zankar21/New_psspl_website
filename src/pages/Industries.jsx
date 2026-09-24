import SectionTitle from "../components/common/SectionTitle";
import IndustryCard from "../components/industries/IndustryCard";
import { industries } from "../data/industries";
import CTA from "../components/home/CTA";

function Industries() {
  return (
    <>
      <section className="industries-hero" aria-label="Industries We Serve">
        <img
          src="/images/industries/industries-hero.webp"
          alt=""
          className="industries-hero-image"
          fetchPriority="high"
        />
      </section>

      <section className="section industries-page">
        <div className="container">
          <SectionTitle
            subtitle="INDUSTRIES WE SUPPORT"
            title="Supporting Critical Industrial Operations"
            description="PSSPL supports industrial clients with products, equipment, spare parts and engineering solutions for maintenance, projects and operational requirements across multiple sectors."
          />

          <div className="industries-page-grid">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Industries;