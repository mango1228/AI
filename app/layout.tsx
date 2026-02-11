import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nailart",
  description: "thumnail generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${indieFlower.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
