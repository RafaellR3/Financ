import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

import "./database";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT || 5000);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });

    return response.status(401).json({
      status: "error",
      message: "Usuário não autenticado!",
    });
  }
);
app.use(express.json());

app.use(router);

app.listen(5000, () => console.log("Server is running"));