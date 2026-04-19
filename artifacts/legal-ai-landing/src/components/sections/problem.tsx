import React from "react";
import { motion } from "framer-motion";
import { Clock, FileWarning, Search, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Reuniones largas con clientes que consumen horas de tu día",
    description: "El tiempo que pasas documentando podría invertirse en estrategia jurídica."
  },
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: "Información crítica que se pierde entre tus notas",
    description: "Detalles que parecen menores durante la reunión pero que cambian el rumbo del caso."
  },
  {
    icon: <FileWarning className="w-6 h-6 text-primary" />,
    title: "Tiempo desperdiciado reconstruyendo lo que se habló",
    description: "Volver a escuchar grabaciones o intentar descifrar apuntes apresurados."
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
    title: "Riesgo de errores en detalles que importan",
    description: "Fechas, nombres y cifras que deben ser exactos desde el primer momento."
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
            Como abogado, tu valor reside en el análisis y la estrategia, no en la transcripción y organización de notas.
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
