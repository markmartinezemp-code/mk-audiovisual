import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MK Audiovisual | Operador de cámara y realizador",
  description:
    "Operador de cámara, realización y producción audiovisual para eventos, conciertos, marcas y empresas.",
  openGraph: {
    title: "MK Audiovisual | Operador de cámara y realizador",
    description:
      "Operador de cámara, realización y producción audiovisual para eventos, conciertos, marcas y empresas.",
    images: ["/steadycam.jpg"],
    locale: "es_ES",
    type: "website",
  },
  // Cuando Search Console te dé el código, quita las // y pon el tuyo:
  // verification: { google: "AQUI_TU_CODIGO" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}