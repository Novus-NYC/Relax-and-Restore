"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { site } from "@/lib/site"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setOpen(false)
  return (
    <header className={`site-header ${scrolled || pathname !== "/" ? "is-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">R</span>
          <span><b>Relax</b> &amp; Restore</span>
        </Link>
        <div className="nav-links" aria-label="Primary links">
          <Link href="/services">Services</Link>
          <Link href="/about">Approach</Link>
          <Link href="/booking">Booking &amp; hours</Link>
        </div>
        <a className="nav-cta" href={site.bookingUrl} target="_blank" rel="noreferrer">Book now <span>↗</span></a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <i /><i />
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <Link href="/services" onClick={close}>Services</Link>
        <Link href="/about" onClick={close}>Approach</Link>
        <Link href="/booking" onClick={close}>Booking &amp; hours</Link>
        <a href={site.bookingUrl} target="_blank" rel="noreferrer" onClick={close}>Book your session ↗</a>
      </div>
    </header>
  )
}
