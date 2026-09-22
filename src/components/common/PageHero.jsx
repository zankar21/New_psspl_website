import Breadcrumbs from "./Breadcrumbs";

function PageHero({ title, subtitle, breadcrumbs }) {
  const breadcrumbItems = breadcrumbs ?? [
    { label: "Home", to: "/" },
    { label: title }
  ];

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
