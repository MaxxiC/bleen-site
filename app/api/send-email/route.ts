// File: app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  const body = await req.json();

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: body.to,
    subject: body.subject,
    text: body.message,
  });

  return NextResponse.json({ ok: true });
}