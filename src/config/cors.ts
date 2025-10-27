import { CorsOptions } from "cors";

const whitelist = [
  process.env.FRONTEND_URL, // deploy
  "http://localhost:5173", // local
];

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    // Permitimos requests sin origin (Postman, fetch server-to-server)
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Bloqueado por CORS:", origin);
      callback(new Error("Error de CORS"));
    }
  },
  credentials: true, // si usás cookies o sessions
};
