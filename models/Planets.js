import mongoose from "mongoose";

const { Schema, model } = mongoose;

const planetSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  mass: { type: Number },
  diameter: { type: Number },

  density: { type: Number },

  gravity: { type: Number },

  escapeVelocity: { type: Number },

  rotationPeriod: { type: Number },

  lengthOfDay: { type: Number },

  distanceFromSun: { type: Number },

  perihelion: { type: Number },

  aphelion: { type: Number },

  orbitalPeriod: { type: Number },

  orbitalVelocity: { type: Number },

  orbitalInclination: { type: Number },

  orbitalEccentricity: { type: Number },

  obliquityToOrbit: { type: Number },

  meanTemperature: { type: Number },

  surfacePressure: { type: Number },

  numberOfMoons: { type: Number },

  hasRingSystem: { type: Boolean },

  hasGlobalMagneticField: { type: Boolean },
});

const PlanetData = model("planet", planetSchema)

export default PlanetData