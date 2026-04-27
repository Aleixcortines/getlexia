import React from "react";
import { motion } from "framer-motion";
import { Clock, FileWarning, Search, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Reuniones con clientes que consumen más tiempo del necesario",
    description: "El tiempo dedicado a documentar cada reunión reduce el que puedes invertir en estrategia jurídica y atención al cliente."
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Información crítica que se diluye entre notas",
    description: "Detalles relevantes pueden pasar desapercibidos si no se estructuran correctamente desde el primer momento."
  },
  {
    icon: <FileWarning className="w-6 h-6 text-primary" />,
    title: "Tiempo invertido en reconstruir conversaciones",
    description: "Revisar conversaciones o interpretar notas incompletas añade fricción a tu flujo de trabajo."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
    title: "Riesgo operativo en detalles clave",
    description: "Fechas, nombres y cifras requieren precisión desde el inicio para evitar errores posteriores."
  }
];

export default function Problem() {
  return (
    <section className="w-full py-24 px-6 bg-muted/40 relative border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-5">
            La carga administrativa está limitando tu capacidad de facturación.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl">
            Como abogado, tu valor está en el análisis y la estrategia, no en la transcripción ni en la gestión manual de notas. Lexia te ayuda a estructurar cada reunión sin perder el control ni la confidencialidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group shadow-sm"
            >
              <div className="mb-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
