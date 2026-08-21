import type { Metadata } from "next"
import Reveal from "@/lib/components/reveal"
import HeroCanvas from "@/lib/components/hero-canvas"
import ScrollScene from "@/lib/components/scroll-scene"

export const metadata: Metadata = { title: "Our approach", description: "The Relax & Restore approach to custom massage." }

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-about"><HeroCanvas variant="about" className="page-hero-canvas" /><div className="section-shell"><div><p className="eyebrow light-eyebrow">The Relax & Restore approach</p><h1>Your massage.<br /><em>Your way.</em></h1><p>Care should feel considered, easy, and entirely yours. This is a place to arrive as you are and leave feeling more at home in your body.</p></div><aside className="hero-aside"><span>Made personal</span><b>Arrive as you are.<br />Leave restored.</b></aside></div></section>
      <section className="approach-section section-shell"><Reveal><div className="approach-grid"><div><p className="eyebrow">The intention</p><h2>Less noise. More relief.</h2><p className="large-copy">Relax &amp; Restore offers custom therapeutic massage for the moments when you need to step out of the current and come back to yourself.</p></div><ScrollScene className="approach-art"><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /><p aria-hidden="true">custom<br />care</p></ScrollScene></div></Reveal></section>
      <section className="principles-section"><Reveal><div className="section-shell"><p className="eyebrow">What guides a session</p><div className="principle-list"><div><span>1</span><h3>Listen first</h3><p>Every session can begin with the areas, pace, and outcome that matter most to you.</p></div><div><span>2</span><h3>Make it yours</h3><p>Come in to soften and unwind, or create space to focus on problem areas.</p></div><div><span>3</span><h3>Keep it easy</h3><p>Choose an in-suite appointment or the convenience of a mobile massage.</p></div></div></div></Reveal></section>
    </>
  )
}
