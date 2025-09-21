import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRYVOS - Transforming Ideas into Digital Realities | App, Web, AI & ML Solutions",
  description:
    "Transforming ideas into digital realities. KRYVOS specializes in cutting-edge app development, web solutions, and AI/ML implementations.",
  keywords: [
    "KRYVOS",
    "App Development",
    "Web Development",
    "AI Development",
    "Machine Learning",
    "React Native",
    "Flutter",
    "Next.js",
    "Python",
    "TensorFlow",
    "Digital Solutions",
    "Software Development",
    "Mobile Apps",
    "Web Applications",
  ],
  openGraph: {
    type: "website",
    siteName: "KRYVOS",
    locale: "en_US",
    url: "https://kryvos.com",
    title: "KRYVOS - Transforming Ideas into Digital Realities",
    description:
      "Innovative solutions in app development, web development, and AI/ML. Building tomorrow's technology today.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "KRYVOS - Digital Solutions",
      },
    ],
  },
  authors: [
    {
      name: "KRYVOS Team",
      url: "https://kryvos.com",
    },
  ],
  creator: "KRYVOS",

  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
