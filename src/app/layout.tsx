import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { default: "Relax & Restore | Custom Massage", template: "%s | Relax & Restore" },
  description: "Custom therapeutic massage sessions, available in-suite or mobile.",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
