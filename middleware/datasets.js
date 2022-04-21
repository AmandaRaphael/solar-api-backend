import PlanetsData from "../models/Planets.js";
import SatelliteData from '../models/Satellite.js';

export  async function getSatelliteDataset (req, _, next) {
    req.dataset = await SatelliteData.find();
    next();
}

export function getPlanetDataset(req, _, next) {
    req.dataset = PlanetsData.find();

    next();
}