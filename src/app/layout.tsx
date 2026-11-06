import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Vorynex Technologies — Independent Software Engineering Studio",
  description:
    "We turn complex business requirements into working software. Custom software, digital web platforms, and intelligent automation systems engineered around the way your business works. Pune, India · Working Worldwide.",
  keywords: [
    "Vorynex Technologies",
    "Software Engineering Studio",
    "Custom Software Development",
    "Next.js Development",
    "Automation & AI",
    "Pune Software Company",
    "White-label Development Agency",
  ],
  authors: [{ name: "Vorynex Technologies" }],
  creator: "Vorynex Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vorynex.com",
    title: "Vorynex Technologies — Independent Software Engineering Studio",
    description:
      "Less decoration. More engineering. Custom software, web platforms, and intelligent automation systems.",
    siteName: "Vorynex Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorynex Technologies — Software Engineering Studio",
    description: "Custom software, digital platforms, and automation systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#070A0F] text-[#F8FAFC] antialiased flex flex-col selection:bg-[#0369A1] selection:text-[#F8FAFC]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

