import SectionTitle from "../common/SectionTitle";

function WhyChooseUs() {

  const features = [
    {
      number: "01",
      title: "Quality Focus",
      description:
        "Reliable products and solutions aligned with industrial requirements."
    },

    {
      number: "02",
      title: "Technical Understanding",
      description:
        "Practical understanding of industrial applications, maintenance and project requirements."
    },

    {
      number: "03",
      title: "Supply & Execution Coordination",
      description:
        "Coordinated support across products, suppliers, site activities and project requirements."
    },

    {
      number: "04",
      title: "Responsive Support",
      description:
        "Clear coordination from requirement understanding through supply or site support."
    }
  ];

  return (
    <section className="why-choose section">

      <div className="container">

        <div className="why-grid">

          <div>

            <SectionTitle
              subtitle="WHY CHOOSE US"
              title="Committed to Reliability and Performance"
              description="We understand the importance of reliable products, technical coordination and responsive support for critical industrial requirements."
            />

          </div>


          <div className="features-grid">

            {features.map((feature) => (

              <div
                className="feature-item"
                key={feature.number}
              >

                <span>
                  {feature.number}
                </span>

                <div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;
