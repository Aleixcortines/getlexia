import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = (req.headers.origin as string) || undefined;
  const allowed = (process.env.ALLOWED_ORIGIN ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  if (origin && allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).end();

  const { name, email } = req.body as { name?: string; email?: string };

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "Nombre y email son obligatorios." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "El formato del email no es válido." });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(200).json({ ok: true, note: "Email not sent: API key not configured." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress = process.env.RESEND_FROM ?? "Lexia <noreply@lexia.ai>";
  const toAddresses = process.env.RESEND_TO ? process.env.RESEND_TO.split(",") : ["aleixcortines@gmail.com"];

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: toAddresses,
      replyTo: email,
      subject: `Nueva solicitud de piloto — ${name}`,
      html: `<h2>Nueva solicitud de acceso al piloto</h2><p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    });

    if ((result as any).error) {
      return res.status(500).json({ error: "No se pudo enviar la solicitud. Inténtalo de nuevo." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "No se pudo enviar la solicitud. Inténtalo de nuevo." });
  }
}
