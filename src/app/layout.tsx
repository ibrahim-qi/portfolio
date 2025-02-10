import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Ibrahim Qureshi | Portfolio",
  description: "Software Engineer and Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-[#0a192f] text-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
