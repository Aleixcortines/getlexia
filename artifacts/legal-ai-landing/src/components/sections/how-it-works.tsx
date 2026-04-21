import React from "react";
import { motion } from "framer-motion";
import { Mic, Cpu, FolderOpen } from "lucide-react";
import Confidentiality from "./confidentiality.tsx";

const steps = [
  {
    number: "01",
    icon: Mic,
    title: "Realizas la reunión con normalidad",
    description:
      "Lexia se integra de forma discreta en tus reuniones (Zoom, Teams, Google Meet o grabaciones), asistiendo en la estructuración de la información sin alterar la dinámica con el cliente.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "La información se organiza automáticamente",
    description:
      "El sistema transcribe la conversación y estructura los elementos clave - partes, hechos y fechas - para facilitar su revisión y análisis profesional.",
  },
  {
    number: "03",
    icon: FolderOpen,
    title: "Recibes el expediente listo para revisar",
    description:
      "Obtienes una ficha estructurada del caso, puntos relevantes identificados y un borrador de seguimiento, listos para validar y utilizar en tu flujo de trabajo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="w-full py-32 px-6 relative overflow-hidden bg-muted/30">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-5">
            Tres pasos. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Sin fricción.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl mx-auto">
            De la reunión al expediente estructurado en minutos, sin cambiar cómo trabaja tu despacho.
          </p>
        </motion.div>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-16 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-[1px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 pointer-events-none z-0"></div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center text-center px-6"
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full border border-primary/15 bg-background flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shadow-sm">
                      <Icon className="w-9 h-9 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-primary/40 shadow-sm flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary font-mono">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>

      <Confidentiality />
    </>
  );
}
