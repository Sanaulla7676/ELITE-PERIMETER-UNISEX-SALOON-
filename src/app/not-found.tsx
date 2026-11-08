import Link from "next/link";
export default function NotFound() {
  return <section className="section"><div className="container soft-panel"><div className="kicker">404 · Page not found</div><h1 style={{ fontSize: 48 }}>This page isn't here.</h1><p className="muted">Use the service directory or return to the salon homepage.</p><div className="hero-actions"><Link className="button-primary" href="/">Home</Link><Link className="button-secondary" href="/services/">Explore services</Link></div></div></section>;
}
