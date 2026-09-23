import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import CTA from "../components/home/CTA";

function About() {
  const directors = [
    {
      name: "Pawan R. Saraf",
      role: "Director",
      bio: "Director of PSSPL, also involved in jewellery, real estate and software businesses. Focused on identifying new growth opportunities and guiding the team to deliver results."
    },
    {
      name: "Tapasya P. Saraf",
      role: "Director",
      bio: "Director of PSSPL, sharing equal responsibility across the company's business interests with a target-oriented approach."
    },
    {
      name: "Dr. Ashish Varma",
      role: "Director",
      bio: "Brings a disciplined, detail-oriented approach to business decision-making."
    }
  ];

  const team = [
    {
      name: "Navalkishor Sharma",
      role: "Senior Project Manager",
      bio: "35+ years of experience across various departments at CSTPS, with deep expertise in power industry maintenance and project execution."
    },
    {
      name: "Dinesh Saraf",
      role: "Business Development Manager",
      bio: "Brings management experience to guide business growth and communicate PSSPL's vision to staff, investors and customers."
    },
    {
      name: "Sagar Sharma",
      role: "Technical Manager — Mechanical & Civil",
      bio: "Electrical engineer with 10 years of experience in power plant maintenance, overseeing AMC projects across MAHAGENCO plants."
    },
    {
      name: "Ravi Sharma",
      role: "Technical Manager — Electrical",
      bio: "Electrical engineer with experience in power plant electrical maintenance, and an authorized service centre partner for a renowned pumping brand in Chandrapur."
    },
    {
      name: "Prasad Jorgewar",
      role: "Business Associate",
      bio: "Commerce graduate handling daily operations for a cement bag manufacturing unit, with a strength in understanding problems and delivering practical solutions."
    }
  ];

  return (
    <>
      {/* PAGE HERO */}

      <PageHero
        title="About Us"
        subtitle="KNOW MORE ABOUT OUR COMPANY"
      />


      {/* COMPANY INTRODUCTION */}

      <section className="section about-page">

        <div className="container about-page-intro">

          <div className="about-page-copy">

            <SectionTitle
              subtitle="OUR COMPANY"
              title="A Reliable Partner for Industrial Engineering Solutions"
            />

            <p>
              Pawanssiddhi Supplier Pvt Ltd (PSSPL) was established
              in 2020 and is an industrial supply and engineering
              solutions company, providing boiler pressure parts,
              industrial spares, equipment and engineering support
              to power, steel, cement, mining and other critical
              industrial sectors.
            </p>

            <p>
              Headquartered in Chandrapur, PSSPL operates through a
              team of 35 skilled professionals and an industry
              relationship network — including its Authorised Dealer
              relationship with RIBO Industries and strategic
              partnerships with Babu Enterprises and ASMI Engineering
              — to support the operational requirements of industrial
              clients.
            </p>

            <p>
              We believe in building long-term relationships through
              transparency, commitment, and dependable service.
            </p>

          </div>

        </div>

      </section>


      {/* MISSION AND VISION */}

      <section className="mission-vision section">

        <div className="container mission-grid">

          <div className="mission-card">

            <span>01</span>

            <h2>Our Mission</h2>

            <p>
              To deliver reliable industrial products and engineering
              solutions that help our clients maintain efficient,
              safe, and uninterrupted operations.
            </p>

          </div>


          <div className="mission-card">

            <span>02</span>

            <h2>Our Vision</h2>

            <p>
              To become a trusted industrial solutions partner known
              for quality, technical understanding, reliability,
              and long-term customer relationships.
            </p>

          </div>

        </div>

      </section>


      {/* CORE VALUES */}

      <section className="section core-values">

        <div className="container">

          <SectionTitle
            subtitle="OUR VALUES"
            title="Principles That Drive Our Business"
            description="Our values define how we work with customers, partners, and industries."
          />


          <div className="values-grid">

            <div className="value-card">
              <span>01</span>
              <h3>Quality</h3>
              <p>
                Commitment to reliable and high-quality products.
              </p>
            </div>


            <div className="value-card">
              <span>02</span>
              <h3>Integrity</h3>
              <p>
                Transparent and ethical business practices.
              </p>
            </div>


            <div className="value-card">
              <span>03</span>
              <h3>Reliability</h3>
              <p>
                Consistent commitment to customers and delivery.
              </p>
            </div>


            <div className="value-card">
              <span>04</span>
              <h3>Partnership</h3>
              <p>
                Building strong and long-term industrial relationships.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* LEADERSHIP — DIRECTORS */}

      <section className="section leadership-section">

        <div className="container">

          <SectionTitle
            subtitle="OUR DIRECTORS"
            title="Leadership Driving PSSPL Forward"
          />

          <div className="leadership-grid">

            {directors.map((person) => (

              <article className="leadership-card" key={person.name}>
                <h3>{person.name}</h3>
                <span className="leadership-role">{person.role}</span>
                <p>{person.bio}</p>
              </article>

            ))}

          </div>

        </div>

      </section>


      {/* LEADERSHIP — TEAM */}

      <section className="section leadership-section leadership-section-alt">

        <div className="container">

          <SectionTitle
            subtitle="OUR TEAM"
            title="Experienced Hands Behind Every Project"
          />

          <div className="leadership-grid">

            {team.map((person) => (

              <article className="leadership-card" key={person.name}>
                <h3>{person.name}</h3>
                <span className="leadership-role">{person.role}</span>
                <p>{person.bio}</p>
              </article>

            ))}

          </div>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="statistics">

        <div className="container stats-grid">

          <div>
            <strong>2020</strong>
            <span>Established</span>
          </div>

          <div>
            <strong>35+</strong>
            <span>Skilled Team Members</span>
          </div>

          <div>
            <strong>7+</strong>
            <span>Industries Served</span>
          </div>

          <div>
            <strong>11+</strong>
            <span>Principals & Partners</span>
          </div>

        </div>

      </section>


      <CTA />

    </>
  );
}

export default About;
