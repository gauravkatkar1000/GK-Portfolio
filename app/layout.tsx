import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gaurav Katkar — AI Solutions Developer",
  description:
    "Full Stack Developer specialising in AI-powered applications, LLM solutions, RAG pipelines, and multi-agent systems using Anthropic Claude APIs.",
  keywords: ["AI Developer", "GenAI", "LLM", "RAG", "Flutter", "Anthropic Claude", "Pune"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
