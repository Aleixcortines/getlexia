import app from "../artifacts/api-server/dist/app.cjs";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // @ts-ignore: Express app is callable
  return (app as any)(req as any, res as any);
}
