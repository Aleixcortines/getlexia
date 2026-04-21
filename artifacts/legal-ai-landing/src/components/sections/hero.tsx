import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-0 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl"
        >
          <span className="block text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-gray-400 mb-2">Lexia</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl"
        >
          De reunión a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">expediente jurídico</span> con control y confidencialidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl font-light"
        >
          Un asistente de IA que estructura tus conversaciones, identifica puntos clave y prepara el seguimiento de cada reunión, para que puedas centrarte en el cliente, respetando la confidencialidad y la práctica profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
        >
          <Button size="lg" className="h-11 px-7 text-sm rounded-full" onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}>
            Solicitar acceso al piloto
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-7 text-sm rounded-full" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            Descubre cómo funciona
          </Button>
        </motion.div>
      </div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 w-full max-w-6xl mx-auto rounded-t-2xl border border-border shadow-2xl overflow-hidden"
        style={{ maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)' }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3 bg-muted/60">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/70"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-xs mx-auto bg-background/80 border border-border rounded-md px-3 py-1 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 flex-shrink-0"></div>
              <span className="text-[10px] text-muted-foreground font-mono truncate">app.lexia.ai/dashboard</span>
            </div>
          </div>
          <div className="w-20 flex-shrink-0"></div>
        </div>

        {/* Dashboard UI Mockup */}
        <div className="w-full flex bg-[#f5f6f8]" style={{ height: '420px' }}>
          {/* Sidebar */}
          <div className="w-52 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-4 py-4 border-b border-gray-100">
              <div className="w-8 h-8 rounded bg-[#0f1e35] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold leading-tight text-center">FIRM<br/>Work</span>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 tracking-widest uppercase">The Digital Jurisconsult</div>
              </div>
            </div>
            {/* New Transcription Button */}
            <div className="px-3 py-3">
              <button className="w-full bg-[#0f1e35] text-white text-[11px] font-medium rounded-lg py-2.5 flex items-center justify-center gap-1.5">
                <span className="text-base leading-none">+</span> New Transcription
              </button>
            </div>
            {/* Nav */}
            <nav className="flex-1 px-2 space-y-0.5">
              {[
                { label: 'Dashboard', active: true },
                { label: 'Meetings', active: false },
                { label: 'Intelligence', active: false },
                { label: 'Risk Analysis', active: false },
                { label: 'Archives', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium cursor-default ${
                    item.active
                      ? 'bg-emerald-50 text-emerald-700 border-l-2 border-emerald-600'
                      : 'text-gray-400'
                  }`}
                >
                  <div className={`w-3.5 h-3.5 rounded-sm flex-shrink-0 ${item.active ? 'bg-emerald-600' : 'bg-gray-300'}`} />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white border-b border-gray-200">
              <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 flex items-center gap-2">
                <div className="w-3 h-3 text-gray-400">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6.5" cy="6.5" r="4.5"/><path d="m11 11 3 3"/></svg>
                </div>
                <span className="text-[10px] text-gray-400">Search case files, transcripts...</span>
              </div>
              <div className="flex items-center gap-3 ml-auto">
                <div className="w-5 h-5 text-gray-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
                <div className="w-5 h-5 text-gray-400"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-[10px] font-semibold text-gray-700 leading-tight">Julian Thorne, Esq.</div>
                    <div className="text-[8px] text-gray-400 tracking-widest uppercase">Senior Partner</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0f1e35] flex items-center justify-center text-white text-[10px] font-bold">JT</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex gap-4 p-5 overflow-hidden">
              {/* Left panel */}
              <div className="flex-1 flex flex-col gap-4 min-w-0">
                {/* Header + stats */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">Firm Dashboard</h2>
                    <p className="text-[10px] text-gray-500 mt-0.5">Intelligence overview for <span className="text-emerald-600 font-medium">Thorne &amp; Associates, LLP</span></p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-center min-w-[90px]">
                      <div className="text-[8px] text-gray-400 uppercase tracking-widest">Live Transcriptions</div>
                      <div className="text-xl font-bold text-emerald-600 mt-0.5">03</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-center min-w-[90px]">
                      <div className="text-[8px] text-gray-400 uppercase tracking-widest">Risk Alerts</div>
                      <div className="text-xl font-bold text-red-500 mt-0.5">01</div>
                    </div>
                  </div>
                </div>

                {/* Live transcription card */}
                <div className="bg-white rounded-xl border border-gray-200 p-4 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[11px] font-semibold text-gray-700">Transcribing...</span>
                    </div>
                    <span className="text-[9px] text-gray-400 font-mono">00:42:15 &nbsp; SESSION_ID: L-4092</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="text-[9px] text-gray-400">09:12 AM</div>
                        <div className="h-2 bg-gray-200 rounded-full w-48" />
                        <div className="h-2 bg-gray-200 rounded-full w-64" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel: Recent Meetings */}
              <div className="w-48 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-gray-700">Recent Meetings</span>
                  <span className="text-[9px] text-emerald-600 font-medium cursor-default">View All</span>
                </div>
                <div className="space-y-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="h-2 bg-gray-200 rounded-full w-full" />
                        <div className="h-1.5 bg-gray-100 rounded-full w-3/4" />
                      </div>
                      <svg className="w-3 h-3 text-gray-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
