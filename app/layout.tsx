import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OneXengine.Media - Digital Marketing & Web Solutions",
  description:
    "Transform your digital presence with expert digital marketing, social media management, and web development solutions.",
  metadataBase: new URL("https://anuragsaha02.github.io/OneXengine.Media"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/OneXengine.Media/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

