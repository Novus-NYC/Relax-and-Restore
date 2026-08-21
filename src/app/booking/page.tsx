import Link from "next/link"
import type { Metadata } from "next"
import Reveal from "@/lib/components/reveal"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Booking & hours", description: "Book a custom massage session with Relax & Restore." }

export default function BookingPage() {
  return (
    <>
      <section className="page-hero page-hero-sand"><div className="section-shell"><p className="eyebrow">Time set aside for you</p><h1>Book your<br /><em>reset.</em></h1><p>Online booking is available through Booksy. If the time you need is not listed, reach out and we will try to make it work. You are also welcome to message to book a session.</p></div></section>
      <section className="booking-section section-shell"><Reveal><div className="booking-grid"><div><p className="eyebrow">Contact</p><h2>Start with the time that feels right.</h2><a className="phone-link" href={site.phoneHref}>{site.phoneDisplay}</a><p className="booking-copy">Prefer an online appointment? Book directly on Booksy and choose the session that works for you.</p><a className="button button-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">Book on Booksy <span>↗</span></a></div><div className="hours-panel"><p className="eyebrow">Hours</p>{site.hours.map((hour) => <div className="hours-row" key={hour.days}><span>{hour.days}</span><b>{hour.hours}</b></div>)}<div className="hours-divider" /><p className="eyebrow price-eyebrow">Pricing</p>{site.services.map((service) => <div className="hours-row" key={service.duration}><span>{service.label}<small>{service.duration}</small></span><b>{service.price}</b></div>)}</div></div></Reveal></section>
      <section className="booking-bottom"><div className="section-shell"><p>Not sure which session is best?</p><Link className="text-link light-link" href="/services">Compare session options <span>→</span></Link></div></section>
    </>
  )
}
