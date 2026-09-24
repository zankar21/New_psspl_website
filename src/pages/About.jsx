import PageHero from "../components/common/PageHero";
import SectionTitle from "../components/common/SectionTitle";
import CTA from "../components/home/CTA";

function About() {
  const directors = [
    {
      name: "Pawan R. Saraf",
      role: "Director",
      bio: "Director of PSSPL with business experience spanning jewellery, technology and other ventures. He contributes to the company’s growth strategy, business development and leadership, with a focus on identifying new opportunities and guiding teams toward effective execution."
    },
    {
      name: "Tapasya P. Saraf",
      role: "Director",
      bio: "Director of PSSPL who shares responsibility for the company’s growth and business development. She contributes a focused, target-oriented approach to organisational priorities and supports the company’s ongoing business initiatives."
    },
    {
      name: "Dr. Ashish Varma",
      role: "Director",
      bio: "A medical professional and Director of PSSPL who brings a disciplined, analytical perspective to the company’s decision-making. His detail-oriented approach supports considered business decisions and the company’s broader growth objectives."
    }
  ];

  const team = [
    {
      name: "Navalkishor Sharma",
      role: "Senior Project Manager",
      bio: "Senior Project Manager with more than 35 years of experience across various departments at CSTPS. He brings extensive knowledge of power-industry maintenance and project execution, contributing practical operational experience to PSSPL’s industrial projects."
    },
    {
      name: "Dinesh Saraf",
      role: "Business Development Manager",
      bio: "Business Development Manager with prior management experience in the Raisoni Group of Education. He supports PSSPL’s business development and stakeholder communication, helping translate the company’s vision into growth opportunities and customer engagement."
    },
    {
      name: "Sagar Sharma",
      role: "Technical Manager — Mechanical & Civil",
      bio: "Electrical Engineer with 10 years of professional experience in power-plant maintenance, including exposure to AMC projects across MAHAGENCO plants. As Technical Manager — Mechanical & Civil at PSSPL, he contributes this field experience to the company's industrial project activities."
    },
    {
      name: "Ravi Sharma",
      role: "Technical Manager — Electrical",
      bio: "Electrical Engineer with experience in power-plant electrical maintenance. As Technical Manager — Electrical, he contributes technical knowledge and field experience to PSSPL’s electrical project activities."
    },
    {
      name: "Prasad Jorgewar",
      role: "Business Associate",
      bio: "Commerce graduate with business and operational experience in manufacturing and real estate. As a Business Associate, he brings a practical, problem-solving approach and commercial perspective to PSSPL’s business activities."
    },
    {
      name: "Zankar Sakharkar",
      role: "Digital Transformation & Technology Manager",
      bio: "B.E. in Electronics Engineering with experience across industrial operations, project coordination, IT infrastructure, data analytics and digital transformation. He supports PSSPL through technology implementation, vendor and supplier research, digital systems and AI-enabled solutions, with a focus on improving operational efficiency and enabling business growth."
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
              Headquartered in Chandrapur, PSSPL’s team of 35+ skilled
              professionals works with manufacturers and industry
              partners to support industrial clients’ operational
              requirements. This includes PSSPL’s role as Authorised
              Dealer for RIBO Industries in Maharashtra, alongside
              strategic partnerships with Babu Enterprises and ASMI
              Engineering.
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
