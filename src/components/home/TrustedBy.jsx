const references = [
  { name: "MAHAGENCO", logo: "/client logo/Mahagenco.png" },
  { name: "ACC Cement", logo: "/client logo/acc-cement-seeklogo.png" },
  { name: "Dalmia Bharat Cement", logo: "/client logo/dalmia-bharat-group-seeklogo.png" },
  { name: "SAIL", logo: "/client logo/steel-authority-of-india-seeklogo.png" },
  { name: "Lloyds Steel", logo: "/client logo/Lloyds Steel.png" }
];

function TrustedBy() {
  return (
    <section className="client-reference-strip" aria-labelledby="client-references-heading">
      <div className="container">
        <h2 id="client-references-heading">Selected Industrial References</h2>
        <ul className="client-reference-logos">
          {references.map(reference => (
            <li key={reference.name}>
              <img src={reference.logo} alt={reference.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TrustedBy;
