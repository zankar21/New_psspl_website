export const principals = [
  {
    slug: "ribo-industries",
    name: "RIBO Industries",
    logo: "/images/ribo/ribo-logo.webp",
    heroImage: "/images/ribo/ribo-hero.webp",
    heroMode: "artwork",
    relationship: "Authorised Dealer",
    territory: "Maharashtra",
    description:
      "PSSPL supplies boiler pressure parts and components for power generation and process industries.",
    productSlugs: [
      "boiler-tubes",
      "economiser-coils",
      "superheater-coils",
      "water-wall-panels",
      "reheater-coils",
      "headers-and-manifolds",
      "piping",
      "evaporator-coil",
      "steam-drum"
    ],
    productCategories: ["Boiler Pressure Parts"],
    detailRoute: "/partners/ribo-industries"
  }
];

export const industryRelationships = [
  {
    name: "Bharat Bijlee",
    role: "Service & Maintenance Products",
    description:
      "Service and maintenance products supporting industrial electrical and mechanical systems.",
    logo: "/vendor-logos/bharat-bijlee.webp"
  },
  {
    name: "Electrotherm India Ltd.",
    role: "Transformer Division",
    description:
      "Transformers and related electrical equipment for industrial and power applications.",
    logo: "/vendor-logos/electrotherm.webp"
  },
  {
    name: "Astral Pipes",
    role: "Industrial Grade Piping",
    description:
      "Industrial-grade piping solutions for process, utility and infrastructure applications.",
    logo: "/vendor-logos/astral.webp"
  },
  {
    name: "Neeco Engineering Servicing Pvt. Ltd.",
    role: "Engineering & Servicing",
    description:
      "Engineering and servicing support for industrial operations and maintenance requirements.",
    logo: "/vendor-logos/neeco.webp"
  },
  {
    name: "Hydro Care Engineers Pvt. Ltd.",
    role: "Engineering & Servicing",
    description:
      "Specialized engineering and maintenance solutions for industrial applications.",
    logo: "/vendor-logos/hydrocare.webp"
  },
  {
    name: "Paharpur Cooling Towers Ltd.",
    role: "Cooling Tower Systems",
    description:
      "Cooling tower systems and related thermal management equipment for industrial applications.",
    logo: "/vendor-logos/paharpur.webp"
  },
  {
    name: "Marsh Automation Pvt. Ltd.",
    role: "Industrial Automation",
    description:
      "Industrial automation solutions including advanced technology-based actuator and automation systems.",
    logo: "/vendor-logos/marsh.webp"
  },
  {
    name: "Ion Exchange India Ltd.",
    role: "Water & Environmental Solutions",
    description:
      "Water treatment, process water and environmental solutions for industrial applications.",
    logo: "/vendor-logos/ionexchange.webp"
  }
];

export const strategicPartners = [
  {
    name: "Babu Enterprises",
    role: "Strategic Business Partner",
    description:
      "Supporting industrial supply, mechanical projects and power plant maintenance requirements."
  },
  {
    name: "ASMI Engineering",
    role: "Strategic Business Partner",
    description:
      "Supporting electrical engineering, industrial projects and maintenance requirements."
  }
];

export function getPrincipalBySlug(slug) {
  return principals.find((principal) => principal.slug === slug);
}

export function getPrincipalRelationship(principal) {
  return principal.territory
    ? `${principal.relationship} for ${principal.territory}`
    : principal.relationship;
}
