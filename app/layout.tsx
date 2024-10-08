import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"


import { cn } from "@/lib/utils"
import Header from "./_components/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Header />
        {children}
      </body>
    </html>
  );
}
