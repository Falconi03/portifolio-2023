import { PointerContextProvider } from "@/context/SpringContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SidebarContextProvider } from "@/context/SidebarContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anderson Falconi",
  description: "Portifólio-2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PointerContextProvider>
          <SidebarContextProvider>{children}</SidebarContextProvider>
        </PointerContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
