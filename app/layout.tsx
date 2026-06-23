import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nael.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nael | Developer, Designer, Creator",
    template: "%s | Nael"
  },
  description:
    "Nael is a developer, designer, and creator building polished web experiences, Discord products, and modern digital systems.",
  keywords: [
    "Nael",
    "portfolio",
    "developer",
    "designer",
    "creator",
    "Next.js",
    "React",
    "TypeScript",
    "Discord.js"
  ],
  authors: [{ name: "Nael" }],
  creator: "Nael",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nael | Developer, Designer, Creator",
    description:
      "A premium personal portfolio for Nael, showcasing development, design, and creative technical work.",
    siteName: "Nael",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Nael portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nael | Developer, Designer, Creator",
    description:
      "A premium personal portfolio for Nael, showcasing development, design, and creative technical work.",
    images: ["/og.svg"]
  },
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
