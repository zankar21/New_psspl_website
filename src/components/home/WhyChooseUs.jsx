import SectionTitle from "../common/SectionTitle";

function WhyChooseUs() {

  const features = [
    {
      number: "01",
      title: "Quality Focus",
      description:
        "We focus on reliable and high-quality industrial products."
    },

    {
      number: "02",
      title: "Technical Understanding",
      description:
        "Strong understanding of industrial applications and requirements."
    },

    {
      number: "03",
      title: "Reliable Supply",
      description:
        "Efficient supply coordination and dependable delivery."
    },

    {
      number: "04",
      title: "Customer Support",
      description:
        "Dedicated support throughout the product supply process."
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
              description="We understand the critical importance of industrial equipment reliability."
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