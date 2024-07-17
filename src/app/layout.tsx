import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "---font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Hafedh DHOUIB | Full Stack Developer Portfolio",
  description:
    "Explore Hafedh's portfolio showcasing skills in full stack development, including React.js, Node.js, and more.",
  keywords:
    "Hafedh, full stack developer, React.js, Node.js, web development, portfolio",
  metadataBase: new URL("https://www.hafedhdhouib.site/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}`}>
        <Header />
        <StairTransition></StairTransition>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
