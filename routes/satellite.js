import express from "express";

import { findLargest, findSmallest, findByName } from "../helper/index.js";
const router = express.Router();

// 4.1 Find a satellite by name
router.get("/find/:name/", (request, response) => {
  const satellite = findByName(request.dataset, request.params.name);


  if (!satellite) {
    return response.send(500);
  }

  response.send(satellite);
});

// 4.2 Find the largest or smallest satellite
router.get("/size", (request, response) => {
  const { pick } = request.query;


  if (pick === "largest") {
  const results = findLargest(request.dataset, "radius");
    return response.send(
      `The satellite with the largest radius is ${results.name}, with a radius of ${results.radius}`
    );
  }

  if (pick === "smallest") {

    const results = findSmallest(request.dataset, "radius");

    return response.send(
      `The satellite with the smallest radius is ${results.name}, with a radius of ${results.radius}`
    );
  }

  response.send(500);
});

// 4.3 Find the densest or least dense satellite
router.get("/density", (request, response) => {
  const { pick } = request.query;


  if (pick === "highest") {
    const results = findLargest(request.dataset, "density");
    return response.send(
      `The satellite with the highest density is ${results.name}, with a density of ${results.density}`
    );
  }

  if (pick === "lowest") {

  const results = findSmallest(request.dataset, "density");
    return response.send(
      `The satellite with the lowest density is ${results.name}, with a density of ${results.density}`
    );
  }

  response.send(500);
});

export default router;
