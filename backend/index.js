import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import "dotenv/config.js";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();

  console.log(`Server running on port ${PORT}`);
});
