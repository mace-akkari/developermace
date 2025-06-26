import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mace Akkari",
  description: "Mace Akkari Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
