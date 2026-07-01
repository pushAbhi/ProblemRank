import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProblemRank — Discover and rank real business problems",
  description: "Validate and rank real-world business problems before building solutions.",
  icons : {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col font-roboto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
