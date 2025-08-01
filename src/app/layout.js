import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WomenRise PathWays",
  description: "Empowering underrepresented women through awareness, access, and opportunity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar2 />
        {children}
      </body>
    </html>
  );
}
