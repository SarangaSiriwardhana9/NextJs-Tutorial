'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    if (!refreshed) {
      setRefreshed(true);
      router.replace('/');
    }
  }, [router, refreshed]);

  return (
    <main>
      <div>Home</div>
    </main>
  );
}
