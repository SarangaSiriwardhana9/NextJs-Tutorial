// src/components/ClientLayout.tsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Sidebar from "@/components/shared/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const pathname = window.location.pathname;
      if (pathname === "/auth") {
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
    <>
      {isSidebarVisible && <Sidebar />}
      <main className="w-full p-4">
        {children}
      </main>
    </>
  );
}
