import Image from "next/image"
import Link from "next/link"
import HeroCanvas from "@/lib/components/hero-canvas"
import Reveal from "@/lib/components/reveal"
import ScrollScene from "@/lib/components/scroll-scene"
import { site } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroCanvas />
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Therapeutic massage, made personal</p>
          <h1>Come back<br />to <em>yourself.</em></h1>
          <p className="hero-copy">Come relax and escape the stress of the world with a therapeutic custom massage. Whether you want to unwind or focus on problem areas, it is your massage to create.</p>
          <div className="hero-actions">
            <a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Book a session <span>↗</span></a>
            <Link className="text-link light-link" href="/services">Explore sessions <span>↓</span></Link>
          </div>
        </div>
        <p className="hero-note"><span>Choose your setting</span>In-suite or mobile massage</p>
      </section>

      <section className="intro-section section-shell">
        <Reveal>
          <p className="eyebrow">A little closer to calm</p>
          <div className="intro-grid">
            <h2>A massage that meets you where you are.</h2>
            <div>
              <p className="large-copy">Choose the quiet of an in-suite session or bring restorative care to your door. Every appointment begins with what your body needs that day.</p>
              <Link className="text-link" href="/about">How it works <span>→</span></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="experience-section">
        <div className="experience-layout section-shell">
          <Reveal>
            <ScrollScene className="image-frame tall-image">
              <Image className="scene-image" src="/images/relax-restore-suite.jpg" alt="A Relax & Restore therapist giving a massage in a comfortable home setting" fill sizes="(max-width: 780px) 100vw, 44vw" />
              <span className="image-caption">Your time, your intention</span>
            </ScrollScene>
          </Reveal>
          <Reveal delay={120}>
            <div className="experience-copy">
              <p className="eyebrow">Two ways to reset</p>
              <h2>Built around your real life.</h2>
              <div className="experience-item"><span>1</span><div><h3>In-suite</h3><p>Recommended for full relaxation and a complete spa-like atmosphere.</p></div></div>
              <div className="experience-item"><span>2</span><div><h3>Mobile</h3><p>Massage comes to you, so restoration can fit into a busy day. Drive time carries an additional charge.</p></div></div>
              <Link className="button button-dark" href="/services">View sessions <span>→</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pricing-preview section-shell">
        <Reveal>
          <div className="section-heading-row"><div><p className="eyebrow">Simple by design</p><h2>Choose your pause.</h2></div><Link className="text-link" href="/booking">Full booking details <span>→</span></Link></div>
          <div className="price-list">
            {site.services.map((service, index) => <div className="price-row" key={service.duration}><span className="price-number">{index + 1}</span><span className="price-name">{service.label}<small>{service.duration}</small></span><strong>{service.price}</strong></div>)}
          </div>
        </Reveal>
      </section>

      <section className="closing-section">
        <Image src="/images/relax-restore-detail.jpg" alt="Relax & Restore massage essentials" fill sizes="100vw" />
        <div className="closing-overlay" />
        <Reveal><div className="closing-content"><p className="eyebrow light-eyebrow">Your next exhale</p><h2>Feel better<br />in your body.</h2><a className="button button-light" href={site.bookingUrl} target="_blank" rel="noreferrer">Reserve your time <span>↗</span></a></div></Reveal>
      </section>
    </>
  )
}
