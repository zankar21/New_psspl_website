export const industrialClients = [
  { id: "mahagenco", name: "MAHAGENCO", sector: "Power Generation", logo: "/client logo/Mahagenco.png" },
  { id: "sail", name: "SAIL", sector: "Steel & Metallurgy", logo: "/client logo/steel-authority-of-india-seeklogo.png" },
  { id: "lloyds", name: "Lloyds Steel", sector: "Steel & Metallurgy", logo: "/client logo/Lloyds Steel.png" },
  { id: "acc", name: "ACC Cement", sector: "Cement", logo: "/client logo/acc-cement-seeklogo.png" },
  { id: "dalmia", name: "Dalmia Bharat Cement", sector: "Cement", logo: "/client logo/dalmia-bharat-group-seeklogo.png" }
];

export const sectorReferences = {
  "power-plants": {
    clients: ["mahagenco"],
    reference: "MAHAGENCO plant references",
    locations: "CSTPS Chandrapur · Koradi TPS · Khaparkheda TPS · Paras TPS",
    support: ["Boiler pressure parts & components", "Maintenance spares & project supplies", "Engineering support for plant requirements"]
  },
  "steel-industry": {
    clients: ["sail", "lloyds"],
    reference: "Steel-sector client references",
    locations: "Steel Authority of India Limited (SAIL) · Lloyds Steel",
    support: ["Captive power & boiler components", "Process utilities & industrial equipment", "Maintenance spares & supply coordination"]
  },
  "cement-industry": {
    clients: ["acc", "dalmia"],
    reference: "Cement-sector client references",
    locations: "ACC Cement · Dalmia Bharat Cement",
    support: ["Boiler & waste heat recovery components", "Industrial equipment & spare parts", "Maintenance & process support supplies"]
  }
};
