import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../data/products";
import { industries } from "../../data/industries";
const pageTitles = { '/': 'Industrial Supply & Project Support', '/about': 'About PSSPL', '/products': 'Products & Equipment', '/services': 'Industrial Services', '/industries': 'Industries & Opportunities', '/partners': 'Manufacturers & Collaborators', '/contact': 'Contact Us' };
function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const product = pathname.startsWith('/products/') ? products.find(p => pathname === `/products/${p.slug}`) : null;
    const industry = pathname.startsWith('/industries/') ? industries.find(p => pathname === `/industries/${p.slug}`) : null;
    const title = pageTitles[pathname] || product?.name || industry?.name || (pathname === '/partners/ribo-industries' ? 'RIBO Industries' : 'Page Not Found');
    document.title = `${title} | PSSPL — Pawanssiddhi Supplier Pvt Ltd`;
  }, [pathname]);
  return null;
}
export default PageMetadata;
