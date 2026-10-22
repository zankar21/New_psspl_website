function SectionNav({ items, label = "On this page" }) {
  return <nav className="section-nav" aria-label={label}><div className="container section-nav-inner"><span>{label}</span><ul>{items.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>)}</ul><a className="section-nav-brochure" href="/documents/PSSPL_Brochure.pdf" download>Download Brochure <span aria-hidden="true">↓</span></a></div></nav>;
}
export default SectionNav;
