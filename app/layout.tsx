import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "sofIA - AI-Powered WhatsApp Payment Agent | AP2 Protocol",
  description:
    "Transform WhatsApp into your payment gateway with sofIA. Secure subscription management and payments using Google's AP2 Protocol for telecom operators.",
  generator: "v0.app",
  keywords: "WhatsApp payments, AP2 protocol, subscription management, telecom, BEMOBI, AI agent",
  openGraph: {
    title: "sofIA - Revolutionary WhatsApp Payment Agent",
    description: "Reduce churn by 90%+ with AI-powered subscription management through WhatsApp",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
