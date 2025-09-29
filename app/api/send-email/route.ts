// File: app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await transporter.sendMail({
      from: `"Il mio sito" <${process.env.SMTP_MAIL}>`,
      to: body.to,
      subject: body.subject,
      text: body.message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return NextResponse.json({ ok: false, error: "Errore invio email" }, { status: 500 });
  }
}
