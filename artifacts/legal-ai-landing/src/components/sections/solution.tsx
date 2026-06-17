import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldAlert, FileText, Brain } from "lucide-react";

export default function Solution() {
  return (
    <section className="w-full py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-5">
            De conversación a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              conocimiento accionable
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl mx-auto">
            Un asistente de IA diseñado para equipos profesionales que procesa el lenguaje
            natural y estructura la información en los formatos que ya utilizas,
            manteniendo el control y la confidencialidad en todo momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Features list */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 items-start"
            >
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center border border-primary/25">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Ficha estructurada de la reunión
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organización de puntos clave, acuerdos, responsables y fechas
                  en un formato claro y listo para
                  integrarse en tu sistema de gestión.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-destructive/15 flex items-center justify-center border border-destructive/25">
                <ShieldAlert className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Identificación de puntos sensibles
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Señalado de posibles aspectos relevantes mencionados durante
                  la conversación, para facilitar su revisión y análisis
                  profesional.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/25">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Borrador de seguimiento listo para enviar
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Generación automática de un email profesional con el resumen
                  de la reunión y los próximos pasos acordados. Solo revisa y
                  envía.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-6 items-start"
            >
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/25">
                <Brain className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Conocimiento conectado del equipo
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La información de cada reunión no queda aislada. Se organiza,
                  se relaciona con otros proyectos y queda disponible para
                  futuras consultas y decisiones.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mockup images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 relative flex items-end gap-4"
          >
            <div className="flex-1 rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              <div className="flex h-full" style={{ minHeight: "420px" }}>
                {/* Sidebar */}
                <div className="w-44 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col">
                  <div className="flex items-center gap-2 px-3 py-3 border-b border-gray-100">
                    <div className="w-7 h-7 rounded bg-[#0f1e35] flex items-center justify-center">
                      <span className="text-white text-[6px] font-bold text-center">
                        LX
                      </span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0f1e35]">
                        Lexia
                      </div>
                      <div className="text-[7px] text-gray-400 uppercase tracking-widest">
                        Meeting Copilot
                      </div>
                    </div>
                  </div>

                  <div className="px-2 py-2">
                    <button className="w-full bg-[#0f1e35] text-white text-[9px] font-medium rounded-lg py-2">
                      + Nueva reunión
                    </button>
                  </div>

                  <nav className="flex-1 px-1.5 space-y-0.5">
                    {[
                      { label: "Dashboard", active: true },
                      { label: "Reuniones", active: false },
                      { label: "Proyectos", active: false },
                      { label: "Análisis", active: false },
                      { label: "Archivo", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`px-2 py-1.5 rounded-lg text-[9px] ${item.active ? "bg-emerald-50 text-emerald-700" : "text-gray-400"}`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main */}
                <div className="flex-1 flex flex-col bg-[#f7f8fa]">
                  {/* Top bar */}
                  <div className="flex items-center px-4 py-2 bg-white border-b">
                    <div className="flex-1 bg-gray-100 rounded-full px-3 py-1 text-[8px] text-gray-400">
                      Buscar reuniones, transcripciones...
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex gap-4">
                    {/* Left */}
                    <div className="flex-1 flex flex-col gap-3">
                      {/* Header */}
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-sm font-bold">
                            Panel del equipo
                          </h2>
                          <p className="text-[10px] text-gray-500 mt-0.5">
                            Resumen de inteligencia para{" "}
                            <span className="text-emerald-600 font-medium">
                              Nova Consulting
                            </span>
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <div className="bg-white border rounded-lg px-3 py-2 text-center">
                            <div className="text-[6px] text-gray-400 uppercase">
                              Reuniones
                            </div>
                            <div className="text-sm font-bold text-emerald-600">
                              03
                            </div>
                          </div>
                          <div className="bg-white border rounded-lg px-3 py-2 text-center">
                            <div className="text-[6px] text-gray-400 uppercase">
                              Puntos clave
                            </div>
                            <div className="text-sm font-bold text-[#0f1e35]">
                              12
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Transcription */}
                      <div className="bg-white rounded-xl border p-3 flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-[9px] font-semibold text-gray-700">
                            Procesando reunión...
                          </span>
                          <span className="text-[7px] text-gray-400">
                            00:42:15
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="h-1.5 bg-blue-100 rounded-full w-40" />
                          <div className="h-1.5 bg-gray-200 rounded-full w-52" />
                          <div className="h-1.5 bg-gray-200 rounded-full w-44" />
                        </div>

                        {/* Meeting summary structure */}
                        <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-lg p-2">
                          <div className="text-[7px] text-emerald-700 font-semibold mb-1">
                            Estructura del resumen
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 bg-emerald-200 rounded-full w-32" />
                            <div className="h-1.5 bg-emerald-100 rounded-full w-40" />
                            <div className="h-1.5 bg-emerald-100 rounded-full w-28" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          {
                            title: "Confidencialidad",
                            desc: "La información permanece bajo control de tu equipo.",
                          },
                          {
                            title: "Estructuración automática",
                            desc: "Cada reunión se convierte en un resumen claro.",
                          },
                          {
                            title: "Conocimiento relacionado",
                            desc: "Vinculado a otros proyectos y disponible para consultas futuras.",
                          },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className="bg-white border rounded-lg p-2"
                          >
                            <div className="text-[8px] font-semibold text-gray-700 mb-1">
                              {item.title}
                            </div>
                            <p className="text-[7px] text-gray-400">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="w-40 flex flex-col gap-2">
                      <div className="text-[9px] font-semibold text-gray-700">
                        Reuniones recientes
                      </div>

                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border rounded-lg p-2">
                          <div className="h-1.5 bg-gray-200 rounded-full w-full mb-1" />
                          <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
                        </div>
                      ))}

                      {/* Insight */}
                      <div className="bg-[#0f1e35] rounded-xl p-3 mt-1">
                        <p className="text-[9px] text-white mb-2">
                          Se han identificado varios puntos relevantes para
                          revisión.
                        </p>
                        <button className="w-full bg-emerald-500 text-white text-[8px] rounded-lg py-1.5">
                          Revisar resumen
                        </button>
                      </div>
                      {/* Follow-up card */}
                      <div className="bg-white border border-gray-200 rounded-lg p-3 mt-2">
                        <p className="text-[9px] text-gray-700 mb-2">
                          Enviar mail de seguimiento y crear tarea.
                        </p>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-emerald-500 text-white text-[9px] rounded-lg py-1.5">
                            Crear tarea
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
