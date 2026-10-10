import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zénit · Estudio Dental y Bienestar en Maracay",
  description:
    "Odontología estética en Maracay con atención puntual, presupuestos claros y un ambiente de total serenidad. Escríbenos por WhatsApp.",
  icons: {
    icon: "/images/logo/z.png",
    shortcut: "/images/logo/z.png",
    apple: "/images/logo/z.png",
  },
  openGraph: {
    title: "Zénit · Estudio Dental y Bienestar en Maracay",
    description:
      "Odontología estética en Maracay con atención puntual, presupuestos claros y un ambiente de total serenidad. Escríbenos por WhatsApp.",
    locale: "es_VE",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-lino font-sans text-bosque">{children}</body>
    </html>
  );
}