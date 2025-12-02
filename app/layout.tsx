import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lexend, Montserrat, Lora, Playfair_Display, EB_Garamond } from "next/font/google"
// localFont import removed because the local .ttf file was missing during build
// import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-ebgaramond" })

// NOTE: DreamAvenue custom font removed until the .ttf file is added to the repository.
// If you want to use a local font, add the font file to `app/fonts/DreamAvenue.ttf`
// and uncomment the localFont import above as well as this configuration.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seusite.com.br"),
  title: "Psicoterapia on-line | Mariana Alves André, CRP 03/30333",
  description:
    "Atendimento para mulheres e pessoas LGBTQIA+. Gestalt-terapia. Psicoterapia on-line. Agende sua sessão.",
  generator: "v0.app",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: "Psicoterapia on-line | Mariana Alves André",
    description: "Atendimento para mulheres e pessoas LGBTQIA+. Gestalt-terapia.",
    url: "https://www.seusite.com.br",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Mariana Alves André | Psicóloga" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicoterapia on-line | Mariana Alves André",
    description: "Gestalt-terapia. Atendimentos on-line.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e0dbce" },
    { media: "(prefers-color-scheme: dark)", color: "#553b2b" },
  ],
  category: "healthcare",
}

export const viewport: Viewport = { width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mariana Alves André",
    jobTitle: "Psicóloga",
    identifier: "CRP 03/30333",
    knowsAbout: ["Gestalt-terapia", "Saúde mental de mulheres", "Saúde mental LGBTQIA+"],
    address: { "@type": "PostalAddress", addressLocality: "Salvador", addressRegion: "BA", addressCountry: "BR" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+55-71-99971-6466",
      areaServed: ["Salvador", "Online"],
      availableLanguage: ["pt-BR"],
    },
  }

  return (
    <html
      lang="pt-BR"
      // <--- 3. Adicionei a dreamAvenue.variable aqui na lista
      className={[
        lexend.variable,
        montserrat.variable,
        lora.variable,
        playfair.variable,
        ebGaramond.variable,
        // dreamAvenue.variable,
      ].join(" ")}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root{
            --font-heading: var(--font-lexend), var(--font-montserrat), ui-sans-serif, system-ui, Arial;
            --font-body: var(--font-lora), var(--font-playfair), var(--font-ebgaramond), Georgia, "Times New Roman", serif;
          }`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
        >
          Pular para o conteúdo
        </a>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
