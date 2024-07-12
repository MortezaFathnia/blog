import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "overreacted — A blog by Morteza Fathnia",
  description: "A personal blog by Morteza Fathnia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <div className="container">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
