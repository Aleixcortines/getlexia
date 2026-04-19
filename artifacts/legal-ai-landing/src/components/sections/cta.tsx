import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PRIVACY_POLICY = `AVISO LEGAL Y TÉRMINOS DE USO

1. Identificación del titular
En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI‑CE), se informa de que el presente sitio web es titularidad de:

Titular: Aleix Cortines Montalvo
Correo electrónico de contacto: aleixcortines@gmail.com

2. Objeto del sitio web
El presente sitio web tiene como finalidad proporcionar información sobre un proyecto piloto para agilizar y transcribir reuniones con clientes en el sector legal y permitir a los usuarios facilitar voluntariamente su dirección de correo electrónico para recibir comunicaciones relacionadas con dicho proyecto.

3. Condiciones de uso
El acceso y uso del sitio web atribuye la condición de usuario, quien se compromete a utilizarlo de forma diligente, conforme a la legislación vigente, la buena fe y el orden público. Queda prohibido cualquier uso con fines ilícitos o que pueda causar daños al titular del sitio web o a terceros.

4. Propiedad intelectual e industrial
Todos los contenidos del sitio web, incluyendo textos, imágenes, diseños, logotipos y código fuente, son titularidad del responsable o de terceros que han autorizado su uso, estando protegidos por la normativa española y europea sobre propiedad intelectual e industrial. Se prohíbe expresamente la reproducción, distribución o comunicación pública sin autorización previa y expresa.

5. Responsabilidad
El titular no se responsabiliza de los posibles errores u omisiones en los contenidos, ni de la falta de disponibilidad del sitio web, realizando los esfuerzos razonables para evitar fallos técnicos.

6. Legislación aplicable y jurisdicción
El presente Aviso Legal y Términos de Uso se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del responsable, salvo que la normativa de protección de consumidores disponga otra cosa.


POLÍTICA DE PRIVACIDAD (ESPAÑA)

1. Responsable del tratamiento
Responsable: Aleix Cortines Montalvo
Correo electrónico de contacto: aleixcortines@gmail.com

2. Normativa aplicable
El tratamiento de los datos personales se realiza de conformidad con:
— Reglamento (UE) 2016/679 (RGPD)
— Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)

3. Datos personales recogidos
A través de este sitio web únicamente se recoge la siguiente información personal:
— Dirección de correo electrónico
No se recogen datos sensibles ni categorías especiales de datos.

4. Finalidad del tratamiento
Los datos facilitados serán tratados con la finalidad de:
— Gestionar el alta del usuario en la lista de suscriptores.
— Enviar comunicaciones informativas, novedades o contenidos relacionados con el proyecto.

5. Base jurídica del tratamiento
La base legal para el tratamiento de los datos es el consentimiento explícito del usuario, conforme al artículo 6.1.a del RGPD. El usuario puede retirar su consentimiento en cualquier momento.

6. Conservación de los datos
Los datos personales se conservarán mientras el usuario no solicite su supresión o se dé de baja de las comunicaciones, y durante los plazos legalmente exigibles en su caso.

7. Destinatarios de los datos
Los datos no se cederán a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos.

8. Derechos del usuario
El usuario puede ejercer los derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento enviando un correo a aleixcortines@gmail.com, adjuntando copia de su DNI o documento identificativo equivalente.

9. Reclamaciones
Si el usuario considera que el tratamiento de sus datos no se ajusta a la normativa vigente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).

10. Modificaciones
La presente Política de Privacidad podrá ser modificada para adaptarse a novedades legislativas o criterios de la AEPD. Las versiones actualizadas estarán disponibles en este sitio web.`;

function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl max-h-[80vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
          <h3 className="text-sm font-semibold text-foreground">Política de Privacidad</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5 flex-1">
          <pre className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
            {PRIVACY_POLICY}
          </pre>
        </div>
      </motion.div>
    </div>
  );
}

export default function Cta() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false });

  const nameError = touched.name && !name.trim() ? "El nombre es obligatorio." : "";
  const emailError = touched.email && !email.trim() ? "El email es obligatorio." : "";
  const canSubmit = accepted && name.trim() !== "" && email.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true });
    if (!canSubmit) return;

    setLoading(true);
    setServerError("");

    try {
      const base = import.meta.env.VITE_API_BASE ?? "";
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json() as { ok?: boolean; error?: string };

      if (!res.ok) {
        setServerError(data.error ?? "Error al enviar. Inténtalo de nuevo.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Error de conexión. Comprueba tu conexión e inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="w-full py-32 px-6 relative overflow-hidden">
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/15 via-background to-background -z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"></div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-5 leading-tight">
            Empieza un piloto con tu despacho
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-12 text-center"
          >
            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-5" strokeWidth={1.5} />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Solicitud recibida</h3>
            <p className="text-muted-foreground">
              Nos pondremos en contacto contigo en las próximas <span className="text-foreground font-medium">24 horas</span> para coordinar el inicio de tu piloto.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card shadow-sm p-8 md:p-10 space-y-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                Nombre <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre y apellidos"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                className={`h-12 bg-background text-foreground placeholder:text-muted-foreground/50 transition-colors text-base ${
                  nameError ? "border-destructive focus:border-destructive" : "border-input focus:border-primary/60"
                }`}
              />
              {nameError && <p className="text-xs text-destructive">{nameError}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@tudespacho.es"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                className={`h-12 bg-background text-foreground placeholder:text-muted-foreground/50 transition-colors text-base ${
                  emailError ? "border-destructive focus:border-destructive" : "border-input focus:border-primary/60"
                }`}
              />
              {emailError && <p className="text-xs text-destructive">{emailError}</p>}
            </div>

            {/* Privacy checkbox */}
            <div className="space-y-1.5">
              <div className="flex items-start gap-3">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded cursor-pointer flex-shrink-0"
                  style={{ accentColor: "hsl(var(--primary))" }}
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground leading-snug cursor-pointer select-none"
                >
                  He leído y acepto la{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(true)}
                    className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                  >
                    Política de Privacidad
                  </button>
                </label>
              </div>
            </div>

            {/* Server error */}
            {serverError && (
              <p className="text-sm text-destructive bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-3">
                {serverError}
              </p>
            )}

            {/* Submit button — disabled until privacy accepted */}
            <Button
              type="submit"
              size="lg"
              disabled={!canSubmit || loading}
              className="w-full h-11 text-sm font-semibold rounded-xl mt-2 group transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  Solicitar acceso al piloto
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60 pt-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Tus datos nunca se comparten con terceros. Sin spam.</span>
            </div>
          </motion.form>
        )}

      </div>

      <div className="mt-24 text-center text-muted-foreground/30 text-sm">
        <span className="font-serif italic">Lexia</span> &mdash; IA jurídica para despachos que valoran su tiempo.
      </div>
    </section>
  );
}
