import React from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function Conocimiento() {
  return (
    <section id="conocimiento" className="w-full py-24 px-6 bg-muted/40 relative border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shadow-sm mx-auto">
            <Brain className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Cada reunión se convierte en
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400"> conocimiento del equipo</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl mx-auto">
            La información no queda en documentos aislados. Se organiza, se conecta y queda disponible para futuras decisiones.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group shadow-sm h-full"
          >
            <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">Captura estructurada</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Cada conversación se transforma automáticamente en información clara: acuerdos, responsables y contexto relevante.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group shadow-sm h-full"
          >
            <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">Conexión entre proyectos</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">La información no se queda en una única reunión. Se vincula con otros proyectos y permite identificar relaciones que de otro modo pasarían desapercibidas.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group shadow-sm h-full"
          >
            <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">Reutilización del conocimiento</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">El conocimiento acumulado queda disponible para consulta en cualquier momento, facilitando el análisis y la preparación de nuevos proyectos.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
