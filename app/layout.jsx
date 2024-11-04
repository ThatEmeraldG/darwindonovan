import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Darwin Donovan Darmadi",
  description: "Darwin Donovan Darmadi's Portofolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <footer className="container mx-auto py-8 text-white/50 text-sm text-center xl:text-start">
          © 2024 by Darwin Donovan Darmadi
        </footer>
      </body>
    </html>
  );
}
