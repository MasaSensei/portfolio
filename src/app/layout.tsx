import NavbarWithCTAButton from "@/components/layouts/Navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>MY PORTFOLIO</title>
      </head>
      <body className={inter.className}>
        {" "}
        <NavbarWithCTAButton />
        {children}
      </body>
    </html>
  );
}
