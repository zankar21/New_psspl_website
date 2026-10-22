import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import PageHero from "../components/common/PageHero";
import SectionNav from "../components/common/SectionNav";
import IndustryClientLogos from "../components/industries/IndustryClientLogos";
import { industries } from "../data/industries";
import { sectorReferences } from "../data/industryReferences";
import heroArtwork from "../components/common/heroArtwork.json";

function Industries() {
  return (
    <div className="industries-showcase">
      <PageHero title="Industries We Serve" subtitle="EXPERIENCE · CAPABILITY · INDUSTRIAL SUPPORT" artworkSrc="/images/industries/industries-hero.webp" />
      <section className="section industry-clients-section" aria-labelledby="industrial-clients-heading">
        <div className="container">
          <div className="industry-clients-heading">
            <div><p className="section-subtitle">OUR INDUSTRIAL CLIENTS</p><h2 id="industrial-clients-heading">Experience with established industrial organisations.</h2></div>
            <p>Industrial supply and engineering support across power, steel and cement, with capabilities extending to allied industrial sectors.</p>
          </div>
          <IndustryClientLogos showSectors />
        </div>
      </section>
      <SectionNav items={[{ id: "industry-experience", label: "Our Experience" }, { id: "industrial-support", label: "How We Support" }, { id: "wider-sectors", label: "More Industries" }]} />

      <section className="section industry-track-record" id="industry-experience">
        <div className="container">
          <SectionTitle subtitle="OUR EXPERIENCE" title="Built on experience. Focused on your industry." description="Our industrial work spans power generation, steel and cement. Explore our client references and the products and support available for each sector." />
          <div className="industry-experience-cards">
            {industries.filter(industry => industry.hasDirectExperience).map(industry => {
              const reference = sectorReferences[industry.slug];
              const artwork = heroArtwork[industry.heroImage];
              return (
                <article className="industry-sector-card" key={industry.id}>
                  <img className="industry-sector-photo" src={artwork.src} width={artwork.width} height={artwork.height} alt="" loading="lazy" />
                  <div className="industry-sector-body">
                    <p className="industry-sector-label">ESTABLISHED EXPERIENCE</p>
                    <h3>{industry.name}</h3>
                    <p className="industry-sector-description">{industry.shortDescription}</p>
                    <IndustryClientLogos clientIds={reference.clients} />
                    <div className="industry-reference-detail"><h4>{reference.reference}</h4><p>{reference.locations}</p></div>
                    <div className="industry-support-list"><h4>How we support this sector</h4><ul>{reference.support.map(item => <li key={item}>{item}</li>)}</ul></div>
                    <Link className="industry-sector-link" to={`/industries/${industry.slug}`}>Explore {industry.name} <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section industry-delivery" id="industrial-support">
        <div className="container">
          <SectionTitle subtitle="HOW WE SUPPORT" title="From industrial supply to project support." description="A practical combination of products, engineering support and manufacturer coordination for plant requirements." />
          <div className="industry-delivery-grid">
            <article><span aria-hidden="true">01</span><h3>Industrial Supply</h3><p>Boiler pressure parts, industrial equipment, mechanical and electrical spares, and maintenance consumables.</p><Link to="/products">Explore Products <span aria-hidden="true">→</span></Link></article>
            <article><span aria-hidden="true">02</span><h3>Engineering & Project Support</h3><p>Technical coordination and engineering support for maintenance activities and industrial project requirements.</p><Link to="/services">Explore Services <span aria-hidden="true">→</span></Link></article>
            <article><span aria-hidden="true">03</span><h3>Manufacturer Coordination</h3><p>Product support through our manufacturer relationships, including RIBO Industries’ authorised dealership in Maharashtra.</p><Link to="/partners">Meet Our Partners <span aria-hidden="true">→</span></Link></article>
          </div>
        </div>
      </section>

      <section className="section industry-wider-sectors" id="wider-sectors">
        <div className="container">
          <SectionTitle subtitle="WIDER INDUSTRIAL CAPABILITIES" title="Supporting more industrial sectors." description="Our product range can support steam systems, utilities, plant maintenance and industrial operations in these sectors." />
          <div className="industry-capability-grid">
            {industries.filter(industry => !industry.hasDirectExperience).map(industry => (
              <article key={industry.id}><h3>{industry.name}</h3><p>{industry.shortDescription}</p><Link to={`/industries/${industry.slug}`} aria-label={`Explore capabilities for ${industry.name}`}>Explore Capabilities <span aria-hidden="true">→</span></Link></article>
            ))}
          </div>
          <p className="industry-additional-reference"><strong>Additional industrial reference:</strong> Western Coalfields Limited (WCL).</p>
        </div>
      </section>

      <section className="section industry-profile-cta">
        <div className="container">
          <div><p className="section-subtitle">GET TO KNOW PSSPL</p><h2>Explore our products and company capabilities.</h2><p>Discover our supply portfolio, industrial experience and engineering support.</p></div>
          <div className="industry-profile-actions"><Link to="/products" className="btn-primary">Explore Our Products</Link><a href="/documents/PSSPL_Brochure.pdf" className="btn-secondary" download>Download Company Profile <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
    </div>
  );
}
export default Industries;
