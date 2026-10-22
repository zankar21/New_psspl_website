import Breadcrumbs from "./Breadcrumbs";

function PageHero({ title, subtitle = "PAWANSSIDDHI SUPPLIER PVT LTD", breadcrumbs, artworkSrc }) {
  const items = breadcrumbs ?? [{ label: "Home", to: "/" }, { label: title }];
  return (
    <section className="page-banner" aria-label={title}>
      <div className="container page-banner-grid">
        <div className="page-banner-copy">
          <p className="page-banner-eyebrow">{subtitle}</p>
          <h1>{title}</h1>
          <Breadcrumbs items={items} />
        </div>
        {artworkSrc && <div className="page-banner-art" aria-hidden="true"><img src={artworkSrc} alt="" fetchPriority="high" /></div>}
      </div>
    </section>
  );
}
export default PageHero;
