import { Router } from "express";
import { Resend } from "resend";
import { logger } from "../lib/logger.js";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email } = req.body as { name?: string; email?: string };

  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: "Nombre y email son obligatorios." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "El formato del email no es válido." });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    logger.warn("RESEND_API_KEY not set — skipping email send");
    res.status(200).json({ ok: true, note: "Email not sent: API key not configured." });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const fromAddress = process.env.RESEND_FROM || "Lexia <noreply@lexia.ai>";
    const toAddresses = process.env.RESEND_TO ? process.env.RESEND_TO.split(",") : ["aleixcortines@gmail.com"];

    const result = await resend.emails.send({
      from: fromAddress,
      to: toAddresses,
      replyTo: email,
      subject: `Nueva solicitud de piloto — ${name}`,
      html: `
        <h2>Nueva solicitud de acceso al piloto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (result.error) {
      logger.error({ name, email, resendError: result.error }, "Resend rejected email");
      res.status(500).json({ error: "No se pudo enviar la solicitud. Inténtalo de nuevo." });
      return;
    }

    logger.info({ name, email, messageId: result.data?.id }, "Pilot request email sent");
    res.status(200).json({ ok: true });
  } catch (err) {
    logger.error(err, "Failed to send pilot request email");
    res.status(500).json({ error: "No se pudo enviar la solicitud. Inténtalo de nuevo." });
  }
});

export default router;
