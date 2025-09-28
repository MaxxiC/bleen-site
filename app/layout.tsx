import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl"
import { cookies } from "next/headers"
import "bootstrap/dist/css/bootstrap.min.css";
import PingStarter from "@/components/PingStarter";
import GoogleAnalytics from "@/components/GoogleAnalytics";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bleen - Home",
  description: "Contact us for more information",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies()
  const lang = (await cookieStore).get("lang")?.value || "it"

  const messages = (await import(`../messages/${lang}.json`)).default

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <GoogleAnalytics />
        <PingStarter />

        <NextIntlClientProvider locale={lang} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
