import { getBaseURL } from "@lib/util/env"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "Whetstonez Ecommerce | Enterprise Commerce Platform",
    template: "%s | Whetstonez Ecommerce",
  },
  description:
    "Premium enterprise ecommerce — curated products, secure checkout, and dedicated support for modern businesses.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-whet-900">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
