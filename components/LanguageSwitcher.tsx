"use client"
import { useTransition } from "react"

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition()

  function setLang(lang: string) {
    document.cookie = `lang=${lang}; path=/; max-age=2592000`
    startTransition(() => {
      window.location.reload()
    })
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => setLang("it")}>🇮🇹 Italiano</button>
      <button onClick={() => setLang("en")}>🇬🇧 English</button>
    </div>
  )
}
