import express from "express";
import satelliteRouter from "./routes/satellite.js";
import planetRouter from "./routes/planet.js";
import adminRouter from "./routes/admin.js";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import {
  getPlanetDataset,
  getSatelliteDataset,
} from "./middleware/datasets.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use(cors())

app.use("/admin", auth, adminRouter);

app.use(logger);

// Remember: The order of your middleware is very important!
app.use("/satellite", getSatelliteDataset, satelliteRouter);
app.use("/planets", getPlanetDataset, planetRouter);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("We are connected to the database"))
  .catch(() => console.log("We are not connected to the database"));
  
app.listen(process.env.PORT || 3001, () => {
  console.log("The server is listening... 🐒");
});
