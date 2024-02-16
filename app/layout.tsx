import "./globals.css";

import type { Metadata } from "next";
import { Karla  } from "next/font/google";

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const font = Karla ({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables: { colorPrimary: '#624CF5' }}}>
      <html lang="en">
        <body className={cn("antialiased", font.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
