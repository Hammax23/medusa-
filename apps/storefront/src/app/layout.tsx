import { getBaseURL } from "@lib/util/env"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"
import { LanguageProvider } from "@lib/context/language-context"

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
    default: "Bayt Al-Nabat | House of Plants",
    template: "%s | Bayt Al-Nabat",
  },
  description:
    "Premium plant store in Saudi Arabia — indoor plants, outdoor plants, succulents, and gardening supplies with fresh delivery guarantee.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-plant-900">
        <LanguageProvider>
          <main className="relative">{props.children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
