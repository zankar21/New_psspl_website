import SectionTitle from "../components/common/SectionTitle";
import IndustryCard from "../components/industries/IndustryCard";
import { industries } from "../data/industries";
import CTA from "../components/home/CTA";
import PageHero from "../components/common/PageHero";
import SectionNav from "../components/common/SectionNav";

function Industries() {
  return (
    <>
      <PageHero title="Industries & Opportunities" subtitle="POWER · STEEL · CEMENT" artworkSrc="/images/industries/industries-hero.webp" />
      <SectionNav items={[{id:"established-sectors",label:"Established Sectors"},{id:"future-opportunities",label:"Future Opportunities"}]} />

      <section className="section industries-page" id="established-sectors">
        <div className="container">
          <SectionTitle
            subtitle="ESTABLISHED SECTORS"
            title="Experience Across Power, Steel & Cement"
            description="Selected industrial customer and work references across our established sectors. Western Coalfields Limited (WCL) is an additional historical industrial reference."
          />

          <div className="industries-page-grid">
            {industries.filter((industry) => industry.id <= 3).map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
              />
            ))}
          </div>
          <div className="future-opportunities" id="future-opportunities">
            <SectionTitle subtitle="FUTURE OPPORTUNITIES" title="Exploring Additional Industrial Sectors" description="Potential applications for industrial supply and project work. These sectors are opportunities for expansion, not claims of completed PSSPL projects." />
            <div className="industries-page-grid">
              {industries.filter((industry) => industry.id > 3).map((industry, index) => <IndustryCard key={industry.id} industry={industry} index={index} />)}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Industries;
