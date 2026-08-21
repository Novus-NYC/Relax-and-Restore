import Link from "next/link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-logo"><span>R</span> Relax &amp; Restore</Link>
          <p>Custom therapeutic massage, designed around the way you want to feel.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/services">Services</Link>
          <Link href="/about">Our approach</Link>
          <Link href="/booking">Booking &amp; hours</Link>
        </div>
        <div>
          <p className="footer-label">Connect</p>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.bookingUrl} target="_blank" rel="noreferrer">Book on Booksy ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.legalName}</span>
        <a href="https://novusnyc.org" target="_blank" rel="noreferrer">Made by Novus</a>
      </div>
    </footer>
  )
}
