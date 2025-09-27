// File: app/[locale]/about/page.tsx
"use client"
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <LanguageSwitcher />
    </div>
  );
}
