function TrustedBy() {
  const clients = [
    "MAHAGENCO",
    "CSTPS Chandrapur",
    "ACC Cement",
    "Dalmia Bharat Cement",
    "SAIL",
    "Lloyds Steel",
    "Western Coalfields Ltd"
  ];

  return (
    <section className="trusted-by">
      <div className="container">

        <span className="trusted-by-label">
          TRUSTED BY LEADING INDUSTRIAL ORGANIZATIONS
        </span>

        <div className="trusted-by-grid">

          {clients.map((client) => (
            <div className="trusted-by-item" key={client}>
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedBy;