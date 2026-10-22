import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container section not-found-page">
      <p className="section-subtitle">404 / PAGE NOT FOUND</p><h1>Let’s get you back on track.</h1>
      <p>The page you are looking for does not exist.</p>
      <div className="not-found-actions">
        <Link to="/" className="btn-primary">
          Return to Homepage
        </Link>
        <Link to="/products" className="btn-secondary">
          View Products
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
