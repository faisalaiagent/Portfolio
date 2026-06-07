import type { Metadata, Viewport } from "next";
import { Syne } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Shopify Developer",
    "AI Agent Developer",
    "Automation Expert",
    "Prompt Engineer",
    "Next.js Developer",
    "Pakistan Developer",
    "Freelance AI Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#080808" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#080808] antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <CustomCursor />
          <ScrollProgress />
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: { background: "#111", border: "1px solid #222", color: "#fff" },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
