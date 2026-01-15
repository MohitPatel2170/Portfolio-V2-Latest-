import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarClient";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: 'black',
}

export const metadata = {
  title: 'Mohit Patel | Full-Stack Web Developer Portfolio',
  description:
    'Mohit Patel is a full-stack web developer and software developer based in Jaipur, India. Explore my portfolio, skills, and projects in web development and frontend.',
  keywords: [
    'Mohit Patel',
    'software developer',
    'full-stack developer',
    'web developer',
    'frontend development',
    'MERN stack',
    'portfolio',
    'Computer Science'
  ],
  authors: [{ name: 'Mohit Patel' }],
  alternates: {
    canonical: '/',
  },
  appleWebApp: {
    title: "Mohit-Patel-Portfolio"
  },
  openGraph: {
    title: 'Mohit Patel | Full-Stack Web Developer Portfolio',
    description:
      'Explore Mohit Patel’s portfolio, showcasing skills and projects in full-stack web development and frontend development.',
    url: '/',
    siteName: 'Mohit Patel Portfolio',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Patel | Full-Stack Web Developer Portfolio',
    description:
      'Explore Mohit Patel’s portfolio, showcasing skills and projects in full-stack web development and frontend development.',
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
