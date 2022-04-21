import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SatSchema = new Schema({
  id: { type: Number },
  planetId: { type: Number },
  name: { type: String },
  gm: { type: Number },
  radius: { type: Number },
  density: { type: Number },
  magnitude: { type: Number },
  albedo: { type: Number },
});

const SatelliteData = model("satellite", SatSchema)

export default SatelliteData