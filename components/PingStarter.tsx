// File: components/PingStarter.tsx
'use client';

import { useEffect } from 'react';

export default function PingStarter() {
  useEffect(() => {
    fetch('/api/ping')
      //.then(() => console.log("🔁 Ping inizializzato"))
      .catch((err) => console.error("Errore inizializzazione ping:", err));
  }, []);

  return null;
}
