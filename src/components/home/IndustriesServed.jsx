function IndustriesServed() {

  const industries = [
    {
      title: "Power Generation",
      companies: [
        "CSTPS – Chandrapur",
        "Koradi Thermal Power Station",
        "Khaparkheda Thermal Power Station",
        "Paras Thermal Power Station"
      ]
    },

    {
      title: "Cement Industry",
      companies: [
        "ACC Cement",
        "Dalmia Bharat Cement"
      ]
    },

    {
      title: "Steel Industry",
      companies: [
        "Lloyds Steel",
        "SAIL"
      ]
    },

    {
      title: "Mining",
      companies: [
        "Western Coalfields Limited (WCL)"
      ]
    }
  ];


  return (

    <section className="section industries-served">

      <div className="container">

        <div className="industries-served-header">

          <span className="section-subtitle">
            OUR INDUSTRIAL EXPERIENCE
          </span>

          <h2>
            Experience Across Critical Industrial Sectors
          </h2>

          <p>
            PSSPL has supported requirements across power generation, cement,
            steel and mining organizations.
          </p>

        </div>


        <div className="served-grid">

          {industries.map((industry) => (

            <div
              className="served-card"
              key={industry.title}
            >

              <h3>{industry.title}</h3>

              <ul>

                {industry.companies.map((company) => (

                  <li key={company}>
                    {company}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default IndustriesServed;
