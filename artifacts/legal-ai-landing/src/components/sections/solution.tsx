import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldAlert, FileText } from "lucide-react";


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
            De conversación a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">conocimiento jurídico accionable</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-light max-w-3xl mx-auto">
            Nuestro motor de IA especializado en derecho procesa el lenguaje natural y lo estructura en los formatos que tu despacho ya utiliza.
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
                <h3 className="text-base font-semibold text-foreground mb-2">Ficha automática del caso</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Extracción de hechos clave, cronología de eventos y perfil de las partes implicadas. Todo estructurado en un formato estándar listo para integrarse a tu sistema de gestión.
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
                <h3 className="text-base font-semibold text-foreground mb-2">Riesgos legales detectados</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Alertas automáticas sobre posibles contingencias legales mencionadas durante la conversación, clasificadas por nivel de gravedad para atención inmediata.
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
                <h3 className="text-base font-semibold text-foreground mb-2">Email de seguimiento listo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Borrador profesional generado al instante con el resumen de lo discutido y los próximos pasos acordados. Solo revisa y envía.
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
            {/* Desktop screenshot */}
            <div className="flex-1 rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
              {/* Dashboard UI */}
              <div className="flex h-full" style={{ minHeight: '420px' }}>
                {/* Sidebar */}
                <div className="w-44 flex-shrink-0 bg-white border-r border-gray-100 flex flex-col">
                  <div className="flex items-center gap-2 px-3 py-3 border-b border-gray-100">
                    <div className="w-7 h-7 rounded bg-[#0f1e35] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[6px] font-bold leading-tight text-center">FIRM<br/>Work</span>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0f1e35]">Lexia</div>
                      <div className="text-[7px] text-gray-400 tracking-widest uppercase">The Digital Jurisconsult</div>
                    </div>
                  </div>
                  <div className="px-2 py-2">
                    <button className="w-full bg-[#0f1e35] text-white text-[9px] font-medium rounded-lg py-2 flex items-center justify-center gap-1">
                      <span className="text-sm leading-none">+</span> New Transcription
                    </button>
                  </div>
                  <nav className="flex-1 px-1.5 space-y-0.5">
                    {[
                      { label: 'Dashboard', active: true },
                      { label: 'Meetings', active: false },
                      { label: 'Intelligence', active: false },
                      { label: 'Risk Analysis', active: false },
                      { label: 'Archives', active: false },
                      { label: 'Settings', active: false },
                    ].map((item) => (
                      <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[9px] font-medium ${item.active ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-600' : 'text-gray-400'}`}>
                        <div className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${item.active ? 'bg-emerald-600' : 'bg-gray-200'}`} />
                        {item.label}
                      </div>
                    ))}
                  </nav>
                  <div className="px-2 py-3 border-t border-gray-100 space-y-1.5">
                    <div className="flex items-center gap-2 text-[9px] text-gray-400 px-2"><div className="w-2.5 h-2.5 rounded-full bg-gray-200" /> Help Center</div>
                    <div className="flex items-center gap-2 text-[9px] text-gray-400 px-2"><div className="w-2.5 h-2.5 rounded-full bg-gray-200" /> Sign Out</div>
                  </div>
                </div>

                {/* Main */}
                <div className="flex-1 flex flex-col bg-[#f7f8fa] overflow-hidden">
                  {/* Top bar */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-100">
                    <div className="flex-1 bg-gray-100 rounded-full px-2.5 py-1 flex items-center gap-1.5">
                      <svg className="w-2.5 h-2.5 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6.5" cy="6.5" r="4.5"/><path d="m11 11 3 3"/></svg>
                      <span className="text-[8px] text-gray-400">Search case files, transcripts...</span>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                      <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      <div className="flex items-center gap-1.5">
                        <div className="text-right"><div className="text-[8px] font-semibold text-gray-700">Julian Thorne, Esq.</div><div className="text-[6px] text-gray-400 uppercase tracking-widest">Senior Partner</div></div>
                        <div className="w-6 h-6 rounded-full bg-[#0f1e35] flex items-center justify-center text-white text-[8px] font-bold">JT</div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex gap-3 p-4 overflow-hidden">
                    {/* Left */}
                    <div className="flex-1 flex flex-col gap-3 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-[15px] font-bold text-gray-900">Firm Dashboard</h2>
                          <p className="text-[8px] text-gray-500">Intelligence overview for <span className="text-emerald-600 font-medium">Thorne &amp; Associates, LLP</span></p>
                        </div>
                        <div className="flex gap-2">
                          <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center">
                            <div className="text-[6px] text-gray-400 uppercase tracking-widest">Live Transcriptions</div>
                            <div className="text-[15px] font-bold text-emerald-600">03</div>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center">
                            <div className="text-[6px] text-gray-400 uppercase tracking-widest">Risk Alerts</div>
                            <div className="text-[15px] font-bold text-red-500">01</div>
                          </div>
                        </div>
                      </div>

                      {/* Transcription card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-3 flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /><span className="text-[9px] font-semibold text-gray-700">Transcribing...</span></div>
                          <span className="text-[7px] text-gray-400 font-mono">00:42:15 &nbsp; SESSION_ID: L-4092</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="text-[7px] text-gray-400">09:12 AM</div>
                              <div className="h-1.5 bg-blue-100 rounded-full w-40" />
                              <div className="h-1.5 bg-gray-200 rounded-full w-52" />
                              <div className="h-1.5 bg-gray-200 rounded-full w-44" />
                            </div>
                          </div>
                          <div className="border-l-2 border-emerald-200 pl-2 ml-2.5">
                            <div className="text-[7px] text-emerald-600 font-medium mb-1">SPEAKER 02</div>
                            <div className="h-1.5 bg-gray-200 rounded-full w-48 mb-1" />
                            <div className="h-1.5 bg-gray-200 rounded-full w-36" />
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="flex-1 space-y-1">
                              <div className="text-[7px] text-gray-400">09:14 AM</div>
                              <div className="h-1.5 bg-blue-100 rounded-full w-44" />
                              <div className="h-1.5 bg-gray-200 rounded-full w-52" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom stats */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { title: 'Compliance Secure', desc: 'All transcripts are encrypted using AES-256 standards with firm-specific keys.', color: 'bg-emerald-100', dot: 'bg-emerald-500' },
                          { title: 'Sync Active', desc: 'Real-time backup to the firm\'s private cloud archive is currently enabled.', color: 'bg-blue-100', dot: 'bg-blue-500' },
                          { title: 'System Health', desc: 'AI processing latency is 14ms. Transcription accuracy at 99.8%.', color: 'bg-purple-100', dot: 'bg-purple-500' },
                        ].map((s) => (
                          <div key={s.title} className="bg-white rounded-lg border border-gray-200 p-2">
                            <div className="flex items-center gap-1 mb-1">
                              <div className={`w-4 h-4 rounded ${s.color} flex items-center justify-center`}><div className={`w-1.5 h-1.5 rounded-full ${s.dot}`} /></div>
                              <span className="text-[8px] font-semibold text-gray-700">{s.title}</span>
                            </div>
                            <p className="text-[7px] text-gray-400 leading-relaxed">{s.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Recent Meetings */}
                    <div className="w-40 flex-shrink-0 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold text-gray-700">Recent Meetings</span>
                        <span className="text-[7px] text-emerald-600 font-medium">View All</span>
                      </div>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                          </div>
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="h-1.5 bg-gray-200 rounded-full w-full" />
                            <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
                          </div>
                          <svg className="w-2.5 h-2.5 text-gray-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                        </div>
                      ))}
                      {/* AI Alert card */}
                      <div className="bg-[#0f1e35] rounded-xl p-3 mt-1">
                        <div className="text-[6px] text-emerald-400 uppercase tracking-widest mb-1.5">Lexia Intelligence</div>
                        <p className="text-[9px] font-semibold text-white leading-snug mb-3">AI identified 4 critical contradictions in Case #772-B.</p>
                        <button className="w-full bg-emerald-500 text-white text-[8px] font-medium rounded-lg py-1.5">Review Discrepancies</button>
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
