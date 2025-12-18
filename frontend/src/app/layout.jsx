import { Inter } from "next/font/google";
import "./globals.css";
import metaLogo from './metalogo.png';
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pantech Software - Custom Engineering & Marketing Solutions",
  description:
    "High-performance, conversion-focused website built with premium Stripe-like aesthetic. Bridging custom enterprise engineering with marketing-tech products.",
  keywords:
    "software development, custom engineering, marketing technology, cloud infrastructure",
  icons: {
    icon: metaLogo.src || '/metalogo.jpeg',
    shortcut: metaLogo.src || '/metalogo.jpeg',
    apple: metaLogo.src || '/metalogo.jpeg',
  },
  openGraph: {
    title: 'Pantech Software - Custom Engineering & Marketing Solutions',
    description:
      'High-performance, conversion-focused website built with premium Stripe-like aesthetic.',
    images: [metaLogo.src || '/metalogo.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
