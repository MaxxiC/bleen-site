// File: lib/mailer.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // mail.tophost.it
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // false = STARTTLS (porta 587). Se usi 465 -> true
  auth: {
    user: process.env.SMTP_USER,     // es: info@miodominio.it
    pass: process.env.SMTP_PASS,     // password della casella
  },
});
