// File: app/about/page.tsx
"use client"
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button, Alert } from "react-bootstrap";
import FadeModalExample from "@/components/FadeModalExample";

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher />
      <Alert variant="success">Questo è un alert Bootstrap!</Alert>
      <Button variant="primary">Cliccami</Button>
      <FadeModalExample />
    </div>
  );
}
