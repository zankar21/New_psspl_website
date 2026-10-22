import Breadcrumbs from "./Breadcrumbs";
import heroArtwork from "./heroArtwork.json";

function PageHero({ title, subtitle = "PAWANSSIDDHI SUPPLIER PVT LTD", breadcrumbs, artworkSrc }) {
  const items = breadcrumbs ?? [{ label: "Home", to: "/" }, { label: title }];
  const artwork = heroArtwork[artworkSrc];
  return (
    <section className="page-banner" aria-label={title}>
      {artworkSrc && <img className="page-banner-image" src={artwork?.src ?? artworkSrc} width={artwork?.width} height={artwork?.height} alt="" fetchPriority="high" />}
      <div className="page-banner-overlay">
        <div className="container">
          <div className="page-banner-copy">
            <p className="page-banner-eyebrow">{subtitle}</p>
            <h1>{title}</h1>
            <Breadcrumbs items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default PageHero;
