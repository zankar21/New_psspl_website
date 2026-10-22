import { industrialClients } from "../../data/industryReferences";

function IndustryClientLogos({ clientIds, showSectors = false }) {
  const clients = clientIds ? industrialClients.filter(client => clientIds.includes(client.id)) : industrialClients;
  return (
    <ul className={`industry-client-logos${showSectors ? " industry-client-logos-all" : ""}`} aria-label="Industrial clients">
      {clients.map(client => (
        <li key={client.id}>
          <div className="industry-client-logo"><img src={client.logo} alt={client.name} loading="lazy" width="180" height="80" /></div>
          {showSectors && <span>{client.sector}</span>}
        </li>
      ))}
    </ul>
  );
}
export default IndustryClientLogos;
