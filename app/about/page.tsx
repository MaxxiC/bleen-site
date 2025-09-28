// File: app/about/page.tsx
"use client"
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button, Alert } from "react-bootstrap";
import FadeModalExample from "@/components/FadeModalExample";
import { useState } from 'react';

export default function AboutPage() {
  const t = useTranslations('About');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "andmassic@gmail.com",
          subject: "Test invio email",
          message: "Questo è un test dall'interfaccia",
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok !== false) {
        console.log("Email inviata con successo:", data);
        setResult("✅ Successo");
      } else {
        console.error("Errore invio email:", data);
        setResult("❌ Errore: " + (data.error || "unknown"));
      }
    } catch (err) {
      console.error("Fetch /api/send-email fallita:", err);
      setResult("❌ Errore di rete");
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher />
      <Alert variant="success">Questo è un alert Bootstrap!</Alert>
      <Button variant="primary">Cliccami</Button>
      <FadeModalExample />
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Invio in corso…" : "Invia email di test"}
      </button>
      {result && <p>Risultato: {result}</p>}
    </div>
  );
}
