import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import StructuredData from "@/components/StructuredData";

const siteUrl = "https://azamshaikh.com";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "مطوّر ويب متكامل | Azam Shaikh – Full Stack Developer",
    template: "%s | Azam Shaikh",
  },
  description: "نصنع تجارب رقمية مذهلة - Full-stack developer specializing in Next.js, MERN stack, and scalable web apps. Building premium, high-performance applications.",
  keywords: [
    "full stack developer",
    "Next.js developer",
    "MERN stack",
    "web developer portfolio",
    "scalable web apps",
    "Arabic developer",
    "مطور ويب",
    "مطور تطبيقات"
  ],
  authors: [{ name: "Azam Shaikh", url: siteUrl }],
  creator: "Azam Shaikh",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: siteUrl,
    title: "مطوّر ويب متكامل | Azam Shaikh – Full Stack Developer",
    description: "نصنع تجارب رقمية مذهلة - Full-stack developer specializing in Next.js, MERN stack, and scalable web apps.",
    siteName: "Azam Shaikh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Azam Shaikh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مطوّر ويب متكامل | Azam Shaikh – Full Stack Developer",
    description: "نصنع تجارب رقمية مذهلة - Full-stack developer specializing in Next.js, MERN stack, and scalable web apps.",
    creator: "@azamshaikh",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <StructuredData />
      </head>
      <body className={`${cairo.variable} ${inter.variable} antialiased selection:bg-gold/30 selection:text-gold font-cairo`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
