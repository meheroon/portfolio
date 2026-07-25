import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Meherun Nessa Ferdausi — Full Stack Developer",
    template: "%s | Meherun Nessa Ferdausi",
  },
  description:
    "Full Stack Software Engineer specializing in MERN stack, Next.js, and QA engineering. Building scalable web applications with a focus on quality and security.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Software QA Engineer",
    "Web Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Meherun Nessa Ferdausi" }],
  creator: "Meherun Nessa Ferdausi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meheroon-portfolio.vercel.app/",
    title: "Meherun Nessa Ferdausi — Full Stack Developer",
    description:
      "Full Stack Software Engineer specializing in MERN stack, Next.js, and QA engineering.",
    siteName: "Meherun Nessa Ferdausi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meherun Nessa Ferdausi — Full Stack Developer",
    description:
      "Full Stack Software Engineer specializing in MERN stack, Next.js, and QA engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${firaCode.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
