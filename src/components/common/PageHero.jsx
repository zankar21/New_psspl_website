import Breadcrumbs from "./Breadcrumbs";

function PageHero({ title, subtitle, breadcrumbs, artworkSrc }) {
  const breadcrumbItems = breadcrumbs ?? [
    { label: "Home", to: "/" },
    { label: title }
  ];

  if (artworkSrc) {
    return (
      <section className="page-hero page-hero--artwork" aria-label={title}>
        <h1 className="page-hero-artwork-title">{title}</h1>
        <img
          src={artworkSrc}
          alt=""
          className="page-hero-artwork-image"
          fetchPriority="high"
        />
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="container">

        <p className="page-hero-subtitle">
          {subtitle}
        </p>

        <h1>{title}</h1>

        <Breadcrumbs items={breadcrumbItems} />

      </div>
    </section>
  );
}

export default PageHero;
