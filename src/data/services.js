import {
  FaBolt,
  FaCogs,
  FaHardHat,
  FaSearch,
  FaTools,
  FaWrench
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "industrial-fabrication-works",
    name: "Industrial Fabrication Works",
    category: "PROJECT & MAINTENANCE SUPPORT",
    shortDescription:
      "Fabrication support for industrial project, maintenance and site requirements, carried out according to approved project requirements and specifications.",
    icon: FaTools
  },
  {
    id: 2,
    slug: "industrial-electrical-works",
    name: "Industrial Electrical Works",
    category: "ELECTRICAL SUPPORT",
    shortDescription:
      "Electrical works and installation support for industrial facilities, projects and maintenance requirements.",
    icon: FaBolt
  },
  {
    id: 3,
    slug: "industrial-civil-works",
    name: "Industrial Civil Works",
    category: "SITE & INFRASTRUCTURE SUPPORT",
    shortDescription:
      "Civil works supporting industrial facilities, infrastructure, maintenance activities and project requirements.",
    icon: FaHardHat
  },
  {
    id: 4,
    slug: "erection-installation-works",
    name: "Erection & Installation Works",
    category: "PROJECT EXECUTION SUPPORT",
    shortDescription:
      "Erection and installation support for industrial equipment, structures and associated project requirements.",
    icon: FaCogs
  },
  {
    id: 5,
    slug: "inspection-ut-thickness-survey",
    name: "Inspection & UT Thickness Survey",
    category: "TECHNICAL FIELD SERVICES",
    shortDescription:
      "Field inspection support including ultrasonic thickness measurements, systematic thickness-data collection and survey reporting for industrial assets and pipelines.",
    icon: FaSearch
  },
  {
    id: 6,
    slug: "industrial-maintenance-site-support",
    name: "Industrial Maintenance & Site Support",
    category: "SITE SUPPORT",
    shortDescription:
      "Site-based support for industrial maintenance, operational and project requirements, coordinated according to the defined scope of work.",
    icon: FaWrench
  }
];
