import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vina le's portfolio",
  description: "cs student and aspiring software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
