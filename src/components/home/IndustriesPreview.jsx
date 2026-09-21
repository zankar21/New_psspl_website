import SectionTitle from "../common/SectionTitle";
import { industries } from "../../data/industries";

function IndustriesPreview() {
  return (
    <section className="industries-preview section">

      <div className="container">

        <SectionTitle
          subtitle="INDUSTRIES WE SERVE"
          title="Supporting Critical Industrial Infrastructure"
          description="Our products serve industries where reliability and performance are essential."
        />

        <div className="industries-scroll">

          {industries.map((industry) => (

            <div
              className="industry-card"
              key={industry.id}
            >

              <div className="industry-number">
                0{industry.id}
              </div>

              <h3>{industry.name}</h3>

              <p>
                {industry.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustriesPreview;