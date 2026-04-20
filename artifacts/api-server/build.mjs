import { rmSync } from "fs";
import { build } from "esbuild";

rmSync("./dist", { recursive: true, force: true });

try {
  await build({
    entryPoints: ["./src/index.ts", "./src/app.ts"],
    outdir: "./dist",
    bundle: true,
    platform: "node",
    format: "esm",
    target: ["node24"],
    sourcemap: true,
    external: [
      "dotenv/config",
      "dotenv",
      "express",
      "pino",
      "pino-http",
      "resend",
      "cookie-parser",
      "cors",
      "drizzle-orm",
      "node:*",
    ],
    outExtension: { ".js": ".js" },
    logLevel: "info",
  });

  console.log("Build successful — output in ./dist");
} catch (err) {
  console.error("Build failed:", err);
  process.exit(1);
}
