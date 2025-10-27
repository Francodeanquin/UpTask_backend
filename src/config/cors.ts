// src/config/cors.ts
import { CorsOptions } from "cors";

const whitelist = [process.env.FRONTEND_URL];

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    // Permitimos sin origin solo en desarrollo local
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Bloqueado por CORS:", origin);
      callback(new Error("Error de CORS"));
    }
  },
  credentials: true, // si usás cookies, tokens, etc.
};
