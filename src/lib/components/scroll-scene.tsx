"use client"

import { useEffect, useRef } from "react"
import type { ReactNode } from "react"

export default function ScrollScene({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const update = () => {
      const bounds = element.getBoundingClientRect()
      const distance = window.innerHeight + bounds.height
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / distance))
      element.style.setProperty("--scene-progress", progress.toFixed(3))
      frame = 0
    }
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)
    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <Tag ref={ref} className={`scroll-scene ${className}`}>{children}</Tag>
}
