# Deployment roadmap — Paso a paso

Este documento recoge los pasos prácticos para pasar de tu entorno local a producción, incluyendo compra/verificación de dominio y despliegue del backend y frontend.

## 1. Prueba rápida (opcional)
- Si solo quieres verificar flujo: cambia `RESEND_FROM` a `onboarding@resend.dev` (o a cualquier remitente ya verificado en tu cuenta Resend) en `artifacts/api-server/.env`.
- Reinicia el backend y prueba el endpoint `/api/contact` para confirmar que el email se envía.

## 2. Compra del dominio
1. Compra un dominio (p. ej. `lexia.ai`) en Namecheap / Cloudflare Registrar / Google Domains.
2. Mantén acceso al panel DNS del registrador.

## 3. Verificar dominio en Resend (recomendado antes de producción)
1. Accede a https://resend.com → Domains → Add domain.
2. Introduce tu dominio (ej. `lexia.ai`). Resend mostrará registros DNS a añadir:
   - SPF / TXT
   - DKIM (CNAME o TXT)
   - Un registro para verificación (CNAME)
3. Añade esos registros en tu proveedor DNS y espera propagación. En la UI de Resend aparecerá "verified".
4. Actualiza `RESEND_FROM` en tu entorno a una dirección del dominio verificado (ej. `noreply@lexia.ai`).

## 4. Preparar el backend para despliegue
Puedes desplegar Express de dos formas:

Opción A — Railway / Render (recomendada, mínimo cambios):
- Conecta tu repo y selecciona la carpeta `artifacts/api-server` como servicio Node.
- Define variables de entorno en la interfaz del servicio:
  - `RESEND_API_KEY` (tu key secreta)
  - `RESEND_FROM` (p. ej. `noreply@lexia.ai` o `onboarding@resend.dev` para pruebas)
  - `RESEND_TO` (email receptor)
  - `PORT` = `3000`
- Deploy: Railway/Render instalará dependencias y lanzará `pnpm run build` / `pnpm run start` según configuración.

Opción B — Vercel (serverless):
- Reescribe `artifacts/api-server` como funciones serverless (opcional, más trabajo) o usa un servicio de contenedor.

## 5. Preparar el frontend en Vercel
1. En Vercel, crea nuevo proyecto apuntando al repo.
2. En **Root Directory** pon `artifacts/legal-ai-landing`.
3. En Variables de entorno (Project Settings): añade `VITE_API_BASE=https://<tu-backend-url>`.
4. Deploy; Vercel te dará `https://<proyecto>.vercel.app`.

## 6. Enlazar dominio custom (opcional)
- Frontend en Vercel: en Project → Domains → Add `lexia.ai`. Sigue las instrucciones DNS.
- Backend: si quieres un subdominio (api.lexia.ai), crea un registro A/CNAME que apunte al servicio donde desplegaste el backend (Railway/Render te dará cómo apuntar).

## 7. Comprobaciones post-despliegue
1. Abre la URL del frontend y envía el formulario.
2. Revisa logs del backend (Railway/Render) — busca `Pilot request email sent` y `resendResult`.
3. En Resend Dashboard → Activity/Events busca el message id y el estado (queued, delivered, bounced, suppressed).
4. Si recibido = OK. Si bounce/suppression → revisa razones en Resend (direccion destino en suppression o remitente no verificado).

## 8. Troubleshooting común
- 403 validation_error: dominio remitente no verificado → verifica dominio en Resend o usa remitente verificado.
- No llega a Gmail: revisa Resend Activity, luego carpeta All Mail / Spam y suppression list.
- Límites: headers `x-resend-daily-quota`/`x-resend-monthly-quota` indican cuota.

## 9. Seguridad y buenas prácticas
- Nunca subas `RESEND_API_KEY` a Git. Usa variables de entorno en Vercel/Railway/Render.
- Añade `artifacts/api-server/.env` a `.gitignore` (ya lo tienes).
- Limita rate en el endpoint si te preocupa abuso.

## 10. Comandos útiles
Backend (local):
```powershell
cd artifacts/api-server
pnpm install
pnpm run build
pnpm run start
```
Frontend (local dev):
```powershell
cd artifacts/legal-ai-landing
pnpm install
pnpm dev
```
Prueba endpoint (PowerShell):
```powershell
Invoke-RestMethod -Uri 'http://localhost:3000/api/contact' -Method Post -Headers @{ 'Content-Type'='application/json' } -Body (@{ name='Prueba'; email='tu@correo.com' } | ConvertTo-Json) | ConvertTo-Json -Depth 10
```

---
Si quieres, hago ahora:
- Cambiar `RESEND_FROM` a `onboarding@resend.dev` para una prueba rápida y reinicio local del backend, o
- Empezar el flujo de despliegue y te guío paso a paso (Railway + Vercel) con los comandos concretos.
