import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elites | Curated Essentials for Smart Living",
  description: "Research-driven product recommendations. We research. You upgrade. Quality-tested essentials from trusted retailers.",
  keywords: "affiliate marketing, product recommendations, smart living, curated products, Amazon, Costco",
  authors: [{ name: "Elites" }],
  openGraph: {
    title: "Elites | Curated Essentials for Smart Living",
    description: "Research-driven product recommendations. We research. You upgrade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
