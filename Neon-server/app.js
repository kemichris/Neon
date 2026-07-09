import express from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/index.routes.js";

const app = express();

/* ---------------- Security ---------------- */
app.use(helmet());
app.use(cors());

/* ---------------- Body Parsers ---------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- Health Check ---------------- */
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "NeonBank API is running"
    });
});

/* ---------------- API Routes ---------------- */
app.use("/api", routes);

export default app;