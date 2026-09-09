function PageHero({ title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">

        <p className="page-hero-subtitle">
          {subtitle}
        </p>

        <h1>{title}</h1>

        <div className="breadcrumb">
          Home / {title}
        </div>

      </div>
    </section>
  );
}

export default PageHero;