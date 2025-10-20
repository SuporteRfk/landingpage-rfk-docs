import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/global.css";
import { WrapperSection } from "@/components/wrapper-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RFK Docs",
  description: "Tudo que você precisa saber sobre a documentação de processos do grupo refriko;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          {children}
        
      </body>
    </html>
  );
}
