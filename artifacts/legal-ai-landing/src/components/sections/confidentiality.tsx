import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Confidentiality() {
  return (
    <section id="confidentialidad" className="w-full py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shadow-sm">
            <ShieldCheck className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
          Confidencialidad y control, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">por diseño</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-light max-w-2xl mx-auto mt-3">
          Lexia está diseñada para operar dentro de las exigencias del entorno jurídico,
          garantizando el control total de la información por parte del despacho y el
          cumplimiento del Reglamento General de Protección de Datos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-muted rounded-lg border">
          <h3 className="font-semibold mb-2">Procesamiento seguro de la información</h3>
          <p className="text-sm text-muted-foreground">Los datos se procesan en entornos controlados, con opciones de almacenamiento adaptadas a las necesidades del despacho.</p>
        </div>

        <div className="p-6 bg-muted rounded-lg border">
          <h3 className="font-semibold mb-2">Control total por parte del despacho</h3>
          <p className="text-sm text-muted-foreground">La información generada pertenece exclusivamente al despacho y permanece bajo su control en todo momento.</p>
        </div>

        <div className="p-6 bg-muted rounded-lg border">
          <h3 className="font-semibold mb-2">Sin uso para entrenamiento de modelos</h3>
          <p className="text-sm text-muted-foreground">Las conversaciones y documentos no se utilizan para entrenar sistemas externos.</p>
        </div>

        <div className="p-6 bg-muted rounded-lg border">
          <h3 className="font-semibold mb-2">Diseñado para entornos con secreto profesional</h3>
          <p className="text-sm text-muted-foreground">La arquitectura del sistema respeta los principios de confidencialidad propios de la práctica jurídica.</p>
        </div>
      </div>
    </section>
  );
}
