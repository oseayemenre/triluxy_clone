import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triluxy Clone",
  description: "Triluxy Clone",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
