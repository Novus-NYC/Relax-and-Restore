import Link from "next/link"
import type { Metadata } from "next"
import Reveal from "@/lib/components/reveal"
import HeroCanvas from "@/lib/components/hero-canvas"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Sessions", description: "Massage options at Relax & Restore." }

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services"><HeroCanvas variant="services" className="page-hero-canvas" /><div className="section-shell"><div><p className="eyebrow light-eyebrow">Massage, made personal</p><h1>Session options<br />with room to <em>breathe.</em></h1><p>Whether you need to relax and unwind or work on a particular area, each therapeutic massage can be shaped around your intention.</p></div><aside className="hero-aside"><span>Custom care</span><b>Built around<br />your body</b></aside></div></section>
      <section className="services-page section-shell"><Reveal><div className="service-intro"><p className="eyebrow">What to expect</p><h2>Therapeutic care, not a one-size-fits-all routine.</h2></div><div className="service-cards">{site.services.map((service, index) => <article className="service-card" key={service.duration}><span>{index + 1}</span><p>{service.duration}</p><h3>{service.label}</h3><strong>{service.price}</strong><a href={site.bookingUrl} target="_blank" rel="noreferrer">Book this session ↗</a></article>)}</div></Reveal></section>
      <section className="session-note"><div className="section-shell note-grid"><p className="eyebrow">Location options</p><div><h2>In-suite for the full spa feeling. Mobile when your schedule needs the softness.</h2><p>Mobile massage includes an additional charge for drive time. In-suite massage is recommended for most relaxation and general spa vibes.</p><Link className="text-link" href="/booking">See hours and booking details <span>→</span></Link></div></div></section>
    </>
  )
}
