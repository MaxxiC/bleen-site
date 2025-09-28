// File: app/api/ping/route.ts
import "@/lib/pinger"; // <-- questo è quello che lo avvia
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "Ping attivo" });
}
