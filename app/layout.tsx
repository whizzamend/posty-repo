import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App using Next.js and Supabase by Nurislom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
