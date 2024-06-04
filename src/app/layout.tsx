'use client';

import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/Sidebar";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const pathname = window.location.pathname;
      if (pathname === "/login") {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    }
  }, [isMounted, router]);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen bg-gradient-to-t to-[#ffffff] via-[#defff4] from-[#ddfff3] `}>
        {isSidebarVisible && <Sidebar />}
        <main className="w-full p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
