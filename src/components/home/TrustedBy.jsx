function TrustedBy() {
  const clients = [
    { name: "MAHAGENCO", logo: "/client logo/Mahagenco.png" },
    { name: "ACC Cement", logo: "/client logo/acc-cement-seeklogo.png" },
    { name: "Dalmia Bharat Cement", logo: "/client logo/dalmia-bharat-group-seeklogo.png" },
    { name: "SAIL", logo: "/client logo/steel-authority-of-india-seeklogo.png" },
    { name: "Lloyds Steel", logo: "/client logo/Lloyds Steel.png" },
    { name: "Western Coalfields Ltd", logo: "/client logo/coal-india-limited-cil-seeklogo.png" }
  ];

  return (
    <section className="trusted-by" aria-labelledby="industrial-experience-heading">
      <div className="container">

        <span className="trusted-by-label">
          INDUSTRIAL EXPERIENCE
        </span>

        <h2 id="industrial-experience-heading" className="trusted-by-title">
          Organizations We Have Worked With
        </h2>

        <div className="trusted-by-grid">

          {clients.map((client) => (
            <div className="trusted-by-item" key={client.name}>
              {client.logo ? (
                <img src={client.logo} alt={`${client.name} logo`} />
              ) : (
                <span>{client.name}</span>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedBy;
