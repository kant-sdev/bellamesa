import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Mulish } from "next/font/google"
import { Toaster } from "sonner"

const mulish = Mulish({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
})
export const metadata: Metadata = {
  title: "Bella Mesa",
  description:
    "Authentic Italian Restaurant - Experience the essence of Italy with authentic flavors, fresh ingredients, and traditional Italian cuisine at Bella Mesa.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mulish.className} font-sans`}>
        {children}
        <Toaster/>
      </body>
    </html>
  )
}

