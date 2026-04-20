import app from "../../artifacts/api-server/dist/app.js";
import { VercelRequest, VercelResponse } from "@vercel/node";

// Vercel Node builder expects a default export or a handler function.
// We adapt Express app to Vercel by exporting a handler.

export default function handler(req: VercelRequest, res: VercelResponse) {
  // @ts-ignore: Express app is callable
  return app(req as any, res as any);
}
