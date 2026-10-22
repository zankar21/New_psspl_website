import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaCogs, FaBolt, FaIndustry, FaProjectDiagram, FaTools, FaHardHat } from "react-icons/fa";
import { supplyCategories } from "../data/supplyCategories";
import TrustedBy from "../components/home/TrustedBy";

const categoryIcons = [FaCogs, FaBolt, FaIndustry, FaProjectDiagram, FaTools, FaHardHat];
const sectors = [
  { name: 'Power Generation', route: '/industries/power-plants', references: 'MAHAGENCO: Chandrapur, Koradi, Khaparkheda and Paras thermal power stations.', label: 'Thermal power & utilities' },
  { name: 'Steel', route: '/industries/steel-industry', references: 'Selected industrial references include SAIL and Lloyds Steel.', label: 'Integrated & process plants' },
  { name: 'Cement', route: '/industries/cement-industry', references: 'Selected industrial references include ACC Cement and Dalmia Bharat Cement.', label: 'Cement manufacturing' }
];
const steps = [
  ['Understand', 'Review the requirement, specifications and site conditions.'],
  ['Source', 'Coordinate with suitable manufacturers, suppliers and specialists.'],
  ['Deliver', 'Arrange supply or coordinate agreed project activities.'],
  ['Support', 'Address supply queries and scope-defined follow-up requirements.']
];

function Home() {
  return (
    <div className="company-home">
      <section className="profile-hero" aria-labelledby="home-heading">
        <div className="container profile-hero-content">
          <p className="profile-eyebrow">PAWANSSIDDHI SUPPLIER PVT LTD</p>
          <h1 id="home-heading">From industrial needs.<br /><span>To real-world solutions.</span></h1>
          <p className="profile-hero-description">Industrial equipment, spare parts, procurement and customer-specific project support. Based in Chandrapur, serving industrial requirements across Maharashtra.</p>
          <div className="profile-actions">
            <Link className="profile-button profile-button-primary" to="/products">Explore Products <FaArrowRight aria-hidden="true" /></Link>
            <a className="profile-button profile-button-light" href="/documents/PSSPL_Brochure.pdf" download>Download Brochure <FaDownload aria-hidden="true" /></a>
          </div>
          <p className="profile-hero-footnote">Industrial supply · Project execution · Strategic collaborations</p>
        </div>
      </section>

      <TrustedBy />

      <section className="profile-section" aria-labelledby="verticals-heading">
        <div className="container">
          <div className="profile-section-heading"><div><p className="profile-eyebrow">TWO BUSINESS VERTICALS</p><h2 id="verticals-heading">Supply expertise.<br />Coordinated execution.</h2></div><p>Established in 2020, PSSPL connects industrial requirements with suitable products, manufacturers and execution resources.</p></div>
          <div className="profile-vertical-grid">
            <article className="profile-vertical-card">
              <img src="/images/home/industrial-spare-parts.webp" alt="Representative industrial equipment and spare parts" width="640" height="360" loading="lazy" />
              <div className="profile-vertical-copy"><span className="profile-card-label">01 / SUPPLY & PROCUREMENT</span><h3>Industrial Supply & Procurement</h3><p>Equipment, machinery, spare parts, components, materials and consumables sourced to meet customer specifications.</p><Link to="/products">View Product Coverage <FaArrowRight aria-hidden="true" /></Link></div>
            </article>
            <article className="profile-vertical-card">
              <img src="/images/home/engineering-project-solutions.webp" alt="Representative industrial project coordination" width="640" height="360" loading="lazy" />
              <div className="profile-vertical-copy"><span className="profile-card-label">02 / PROJECT WORK</span><h3>Industrial Project Work</h3><p>Mechanical, electrical, fabrication and maintenance assignments, undertaken within available capabilities or coordinated with specialist collaborators.</p><Link to="/services">Explore Project Capabilities <FaArrowRight aria-hidden="true" /></Link></div>
            </article>
          </div>
          <p className="profile-note">Industrial images are illustrative. Supply and project work are subject to customer specifications, agreed scope and available resources.</p>
        </div>
      </section>

      <section className="profile-section profile-section-tint" aria-labelledby="coverage-heading">
        <div className="container">
          <div className="profile-section-heading"><div><p className="profile-eyebrow">PRODUCT & EQUIPMENT COVERAGE</p><h2 id="coverage-heading">Equipment. Components.<br />Industrial essentials.</h2></div><Link className="profile-text-link" to="/products">View Full Portfolio <FaArrowRight aria-hidden="true" /></Link></div>
          <div className="profile-category-grid">{supplyCategories.map((category, index) => { const Icon = categoryIcons[index]; return <Link to={`/products#${category.id}`} className="profile-category-card" key={category.id}><Icon aria-hidden="true" /><h3>{category.title}</h3><p>{category.items.slice(0, 3).join(' · ')}</p><span>View Category <FaArrowRight aria-hidden="true" /></span></Link>; })}</div>
          <p className="profile-note">Products are sourced against customer requirements. Specifications and availability are subject to manufacturer confirmation.</p>
        </div>
      </section>

      <section className="profile-section" aria-labelledby="ribo-heading">
        <div className="container profile-ribo">
          <div className="profile-ribo-logo"><img src="/images/ribo/ribo-logo.webp" alt="RIBO Industries" width="320" height="200" loading="lazy" /></div>
          <div><p className="profile-eyebrow">AUTHORISED DEALER FOR MAHARASHTRA</p><h2 id="ribo-heading">RIBO Industries</h2><p>Boiler and pressure components manufactured by RIBO, with customer coordination and product supply through PSSPL in Maharashtra.</p><ul className="profile-product-list"><li>Boiler tubes & coils</li><li>Water wall panels</li><li>Headers & manifolds</li><li>Piping & steam drums</li></ul><Link className="profile-text-link" to="/partners/ribo-industries">Explore RIBO Products <FaArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="profile-section profile-section-navy" aria-labelledby="experience-heading">
        <div className="container">
          <div className="profile-section-heading"><div><p className="profile-eyebrow">INDUSTRIAL EXPERIENCE & REFERENCES</p><h2 id="experience-heading">Power. Steel. Cement.</h2></div><p>Selected industrial customer and work references across PSSPL’s established sectors.</p></div>
          <div className="profile-sector-grid">{sectors.map(sector => <article key={sector.name}><p className="profile-card-label">{sector.label}</p><h3>{sector.name}</h3><p>{sector.references}</p><Link to={sector.route}>Explore Sector <FaArrowRight aria-hidden="true" /></Link></article>)}</div>
          <div className="profile-reference-note"><p><strong>Additional industrial reference:</strong> Western Coalfields Limited (WCL).</p><p>References represent historical customer or work associations.</p></div>
          <Link className="profile-text-link" to="/industries">View Sectors & Future Opportunities <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="profile-section" aria-labelledby="process-heading">
        <div className="container">
          <div className="profile-section-heading"><div><p className="profile-eyebrow">HOW WE WORK</p><h2 id="process-heading">Understand. Source. Deliver.</h2></div><p>Customer specifications and agreed scope guide each supply requirement and project assignment.</p></div>
          <ol className="profile-process">{steps.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
          <div className="profile-network"><div><p className="profile-eyebrow">MANUFACTURERS & COLLABORATORS</p><h3>A network built around your requirements.</h3><p>Manufacturer and supplier sourcing supports our product coverage. Babu Enterprises and ASMI Engineering are strategic collaborators for industrial requirements.</p><p className="profile-note">Supplier-network relationships are distinct from the authorised RIBO dealership and remain subject to confirmation.</p></div><Link className="profile-text-link" to="/partners">View Our Network <FaArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="profile-section profile-closing" aria-labelledby="profile-heading">
        <div className="container profile-closing-grid"><div><p className="profile-eyebrow">GET TO KNOW PSSPL</p><h2 id="profile-heading">Your industrial requirements.<br />Our commitment.</h2><p>Explore our capabilities, keep a copy of our company profile, or connect with the team.</p><Link className="profile-text-link" to="/about">About PSSPL <FaArrowRight aria-hidden="true" /></Link></div><div className="profile-actions"><a className="profile-button profile-button-primary" href="/documents/PSSPL_Brochure.pdf" download>Download Brochure <FaDownload aria-hidden="true" /></a><Link className="profile-button profile-button-outline" to="/contact">Contact Our Team <FaArrowRight aria-hidden="true" /></Link></div></div>
      </section>
    </div>
  );
}
export default Home;
