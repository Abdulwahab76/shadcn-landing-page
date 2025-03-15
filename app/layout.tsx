import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import WhatsappWeb from "@/components/whatsapp-web";
import { FooterSection } from "@/components/layout/sections/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyferTech Solutions - Innovative Tech for Everyone",
  description: "Providing cutting-edge technology solutions for businesses and individuals.",
  other: {
    "google-site-verification": "1QPzQdxEBZOEeLaMv6CSEvNqrfrWeGPmOQqj0Ig90rE",
  },
  openGraph: {
    title: "CyferTech Solutions - Innovative Tech for Everyone",
    description: "Providing cutting-edge technology solutions for businesses and individuals.",
    url: "https://cyfertechsolutions.netlify.app/",
    siteName: "CyferTech Solutions",
    images: [
      {
        url: "https://cyfertechsolutions.netlify.app/logo-transparent.png",
        width: 200,
        height: 200,
        alt: "CyferTech Solutions Logo",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "CyferTech Solutions - Innovative Tech for Everyone",
    description: "Providing cutting-edge technology solutions for businesses and individuals.",
    images: ["https://cyfertechsolutions.netlify.app/logo-transparent.png"],
  },

  metadataBase: new URL("https://cyfertechsolutions.netlify.app/"),
  alternates: {
    canonical: "https://cyfertechsolutions.netlify.app/",
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
          <WhatsappWeb />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
