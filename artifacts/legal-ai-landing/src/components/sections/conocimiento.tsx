import React from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function Conocimiento() {
  return (
    <section id="conocimiento" className="w-full py-32 px-6 relative overflow-hidden bg-muted/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <Brain className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Cada reunión no se pierde. Se convierte en conocimiento del despacho.
            </h2>
          </div>

          <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl mx-auto">
            La información no queda en documentos aislados. Se organiza, se conecta y queda disponible para futuras decisiones.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
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
            className="bg-[#f7f8fa] border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">Captura estructurada</h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">
              Cada conversación se transforma automáticamente en información clara: hechos, partes implicadas y contexto relevante.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-[#f7f8fa] border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">Conexión entre expedientes</h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">
              La información no se queda en un único caso. Se vincula con otros expedientes y permite identificar relaciones que de otro modo pasarían desapercibidas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#f7f8fa] border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-foreground mb-2">Reutilización del conocimiento</h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-light">
              El conocimiento acumulado queda disponible para consulta en cualquier momento, facilitando el análisis y la preparación de nuevos casos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
