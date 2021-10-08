import express from "express";
import cors from "cors";
import morgan from "morgan";
import { NotFoundError } from "./errors";
import { errorHandler } from "./middlewares/error-handlers";

const app = express();

// MIDDLEWARES

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/emails"));

/**
 * LOGGER
 */
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/**
 * ROUTES
 */
import "./routes/index";

/**API DOCUMENTATION */
app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
