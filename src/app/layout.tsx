import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a192f",
  viewportFit: "cover", // For iPhone notch support
};

export const metadata: Metadata = {
  title: "Ibrahim Qureshi | Software Engineer & Data Analyst",
  description: "Fresh graduate Software Engineer based in Bristol, UK. BSc 2:1 from UWE. Specializing in Full Stack development, Data Analysis, SQL, Python, and data visualisation.",
  keywords: ["Software Engineer", "Data Analyst", "Junior Developer", "Python", "SQL", "React", "Data Visualisation", "PostgreSQL", "Bristol", "UWE", "Fresh Graduate"],
  authors: [{ name: "Ibrahim Qureshi" }],
  creator: "Ibrahim Qureshi",
  openGraph: {
    title: "Ibrahim Qureshi | Software Engineer & Data Analyst",
    description: "Fresh graduate specializing in software development and data analysis. Python, SQL, React, Data Visualisation.",
    type: "website",
    url: "https://ibrahimqi.com",
    siteName: "Ibrahim Qureshi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Qureshi | Software Engineer & Data Analyst",
    description: "Fresh graduate specializing in software development and data analysis.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ibrahim Q.",
  },
  formatDetection: {
    telephone: false, // Prevent auto-linking phone numbers
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Prevent iOS from auto-styling inputs */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
