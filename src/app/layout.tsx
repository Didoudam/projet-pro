import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { ToastContainer } from "@/components/ToastContainer";
import { EmailVerificationBanner } from "@/components/EmailVerificationBanner";
import { MainLayoutWrapper } from "@/components/MainLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projet Pro - Réseau social professionnel",
  description: "Réseau social professionnel pour connecter talents et entreprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <EmailVerificationBanner />
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
        <ToastContainer />
      </body>
    </html>
  );
}
