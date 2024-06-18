import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import { Toaster } from "react-hot-toast";

const font = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posty App",
  description: "Posting app using Next.js and Supabase by Nurislom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
