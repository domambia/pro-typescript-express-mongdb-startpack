import mongoose from "mongoose";

import { app } from "./app";
import { config } from "./../config";

const start = async () => {
  // check for configurations variables
  if (!config.JWT_SECRET) {
    throw new Error(
      "Please provide JWT_SECRET in config.ts, at your project root directory"
    );
  }

  if (!config.APP_NAME) {
    throw new Error(
      "Please provide APP_NAME in config.ts, at your project root directory"
    );
  }

  if (!config.DB_URL) {
    throw new Error(
      "Please provide DB_URL in config.ts, at your project root directory"
    );
  }

  if (!config.PORT) {
    throw new Error(
      "Please provide PORT in config.ts, at your project root directory"
    );
  }

  // Configure database
  try {
    await mongoose.connect(config.DB_URL);

    console.log("Connected to DB Successfully ...");
  } catch (error) {
    console.log(`DB Connection Error ${error}`);
  }

  //Starting the app instance
  app.listen(config.PORT, () => {
    console.log(
      `${config.APP_NAME} is running on http://localhost:${config.PORT}`
    );
  });
};

start();
