import "dotenv";
import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";

import "./database";

import routes from "./controllers";
import AppError from "./errors/AppError";
import uploadConfig from "./config/uploadConfig";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_URL,
  })
);

app.use(express.json());

app.use(routes);

app.use("/files", express.static(uploadConfig.storagePath));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    try {
      return res.status(err.statusCod).json({
        status: "error",
        message: err.message,
        userFriendly: err?.userFriendly,
      });
    } catch {}
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333);
