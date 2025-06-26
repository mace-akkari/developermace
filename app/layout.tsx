import type React from "react"
import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Mace Akkari",
  description: "Mace Akkari Portfolio",
};

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}