import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlowForge - AI Workflow Intelligence Platform",
  description: "Transform your workflows with AI intelligence. Trusted by 10,000+ teams worldwide.",
  keywords: ["workflow", "AI", "automation", "productivity", "intelligence"],
  authors: [{ name: "FlowForge Team" }],
  openGraph: {
    title: "FlowForge - AI Workflow Intelligence Platform",
    description: "Transform your workflows with AI intelligence. Trusted by 10,000+ teams worldwide.",
    type: "website",
    url: "https://flowforge.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}