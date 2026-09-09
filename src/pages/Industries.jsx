import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import IndustryCard from "../components/industries/IndustryCard";
import { industries } from "../data/industries";
import CTA from "../components/home/CTA";

function Industries() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        subtitle="INDUSTRIAL SECTORS"
      />

      <section className="section industries-page">

        <div className="container">

          <SectionTitle
            subtitle="OUR INDUSTRY EXPERTISE"
            title="Supporting Critical Industrial Operations"
            description="We provide industrial boiler pressure components and engineering solutions for a wide range of energy-intensive industries."
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