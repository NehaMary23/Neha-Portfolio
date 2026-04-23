// app.config.js
import { defineConfig } from "@tanstack/start/config";
import viteTsConfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  vite: {
    plugins: [viteTsConfigPaths()]
  },
  server: {
    preset: "vercel",
    experimental: {
      asyncContext: true
    }
  }
});
export {
  app_config_default as default
};
