import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Herry TikTok Tool | Digital Identity Protection",
  description: "Professional compliance support and account recovery for TikTok creators.",
};

// Yahan se Type annotations hata di hain taaky error na aaye
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}