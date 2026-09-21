import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Digital IT Hub Würzburg",
  description: "Digital IT Hub Würzburg official web page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <body className=" min-h-screen flex flex-col items-center text-center px-8 py-6 ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
