// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Controlla cookie lingua
  let lang = req.cookies.get("lang")?.value
  //console.log("Cookie esistente:", lang)

  if (!lang) {
    // Rileva da header browser
    const acceptLang = req.headers.get("accept-language")
    lang = acceptLang?.split(",")[0].split("-")[0] || "it"
    //console.log("Rilevato dal browser:", acceptLang)

    // Supporta solo "en" e "it"
    if (!["en", "it"].includes(lang)) {
      lang = "it"
    }

    
    res.cookies.set("lang", lang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 giorni
    })
  }

  return res
}
