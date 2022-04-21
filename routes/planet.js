import express from "express";
//  import planets from "../planets-dataset.js";
import PlanetsData from "../models/Planets.js";

const router = express.Router();


// capture all GET requests to route
router.get("/", async (request, response) => {
  const planets= await PlanetsData.find()
  return response.status(200).json(planets);
});

// router.get("/:planet", async (request, response) => {
//   const planetName = request.params.planet;

//   if (!/^[a-zA-Z]+$/.test(planetName)) {
//     return response.status(504).json("Invalid input");
//   }
//   const planets = await PlanetsData.find();
//   console.log("q",planets);
  
//   const planet = planets.find(
//     (planet) =>
//       planet.name === planetName[0].toUpperCase() + planetName.slice(1)
//   );
//   //No sat with that name

//   if (!planet) {
//     return response.status(404).json("No satellite found");
//   }
//   return response.status(200).json(planet);
// });

router.get("/find/:name",async (request, response) => {
  const planetName = request.params.name;

  if (!/^[a-zA-Z]+$/.test(planetName)) {
    return response.status(504).json("Invalid input");
  }
 const planets = await PlanetsData.find();
  const planet = planets.find(
    (planet) =>
      planet.name === planetName[0].toUpperCase() + planetName.slice(1)
  );
  //No sat with that name

  if (!planet) {
    return response.status(404).json("No satellite found");
  }
  return response.status(200).json(planet);
});

//task5:2
router.get("/size/:pick", async (request, response) => {
  const pick = request.params.pick.toLowerCase();
  if (!/^[a-zA-Z]+$/.test(pick)) {
    return response.status(504).json("Invalid input!");
  }
 const planets = await PlanetsData.find();
  const sorted = planets.sort((a, b) =>
    a.diameter > b.diameter ? 1 : b.diameter > a.diameter ? -1 : 0
  );
  if (pick === "smallest") {
    return response
      .status(200)
      .json(
        `The smallest planet is ${sorted[0].name} and it has diameter ${sorted[0].diameter} `
      );
  }
  if (pick === "largest") {
    return response
      .status(200)
      .json(
        `The largest planet is ${
          sorted[sorted.length - 1].name
        } and it has diameter ${sorted[sorted.length - 1].diameter} `
      );
  }

  return response
    .status(404)
    .json("No Satellite found!Please use size/largest or size/smallest");
});

//task 5.3
router.get("/moons/:pick", async (request, response) => {
  const pick = request.params.pick.toLowerCase();
  if (!/^[a-zA-Z]+$/.test(pick)) {
    return response.status(504).json("Invalid input!");
  }
  const planets = await PlanetsData.find();
  
  const sorted = planets.sort((a, b) =>
    a.numberOfMoons > b.numberOfMoons
      ? 1
      : b.numberOfMoons > a.numberOfMoons
      ? -1
      : 0
  );
  

  if (pick === "most") {
    return response
      .status(200)
      .json(
        `The  planet with most no of moons is ${
          sorted[sorted.length - 1].name
        } and it has no of moons ${sorted[sorted.length - 1].numberOfMoons} `
      );
  }
  if (pick === "none") {
    let arrayReduced = sorted.reduce((noMoonArray, planet) => {
      if (planet.numberOfMoons === 0) {
    

        return [...noMoonArray, planet.name];
      }
      return noMoonArray;
    }, []);
    return response
      .status(200)
      .json(`The planet with no moons are ${arrayReduced} `);
  }

  return response
    .status(404)
    .json("No Satellite found!Please use moons/most or moons/none");
});

//task5:4
router.get("/sun/:pick", async (request, response) => {
  const pick = request.params.pick.toLowerCase();
  if (!/^[a-zA-Z]+$/.test(pick)) {
    return response.status(504).json("Invalid input!");
  }
const planets = await PlanetsData.find();
  const sorted = planets.sort((a, b) =>
    a.distanceFromSun > b.distanceFromSun
      ? 1
      : b.distanceFromSun > a.distanceFromSun
      ? -1
      : 0
  );
  if (pick === "furthest") {
    return response
      .status(200)
      .json(
        `The furthest planet is  ${
          sorted[sorted.length - 1].name
        } and it has distance From Sun ${
          sorted[sorted.length - 1].distanceFromSun
        } `
      );
  }
  if (pick === "closest") {
    return response
      .status(200)
      .json(
        `The closest planet is  ${
          sorted[0].name
        } and it has distance From Sun ${sorted[0].distanceFromSun} `
      );
  }

  return response
    .status(404)
    .json("No Satellite found!Please use sun/furthest or sun/closest");
});

//task5:5
router.get("/temperature/:pick", async (request, response) => {
  const pick = request.params.pick.toLowerCase();
  if (!/^[a-zA-Z]+$/.test(pick)) {
    return response.status(504).json("Invalid input!");
  }
const planets = await PlanetsData.find();
  const sorted = planets.sort((a, b) =>
    a.meanTemperature > b.meanTemperature
      ? 1
      : b.meanTemperature > a.meanTemperature
      ? -1
      : 0
  );
  if (pick === "coldest") {
    return response
      .status(200)
      .json(
        `The coldest planet is ${sorted[0].name} and it has temperature  ${sorted[0].meanTemperature} `
      );
  }
  if (pick === "hottest") {
    return response
      .status(200)
      .json(
        `The hottest planet is ${
          sorted[sorted.length - 1].name
        } and it has temperature ${sorted[sorted.length - 1].meanTemperature} `
      );
  }

  return response
    .status(404)
    .json(
      "No Satellite found!Please use temperature/hottest or  temperature/coldest"
    );
});
// 5.6 Find the planets with the longest and shortest day
router.get("/day/:pick", async (request, response) => {
const pick = request.params.pick.toLowerCase();
 if (!/^[a-zA-Z]+$/.test(pick)) {
   return response.status(504).json("Invalid input!");
 }
  const planets = await PlanetsData.find();
  const sorted = planets.sort((a, b) =>
    a.lengthOfDay > b.lengthOfDay
      ? 1
      : b.lengthOfDay> a.lengthOfDay
      ? -1
      : 0
  );

  if (pick === "longest") {
    return response.send(
      `The planet with the longest day is ${
        sorted[sorted.length - 1].name
      }, with a length of ${sorted[sorted.length - 1].lengthOfDay}`
    );
  }

  if (pick === "shortest") {
    return response.send(
      `The planet with the shortest day is ${
        sorted[0].name
      }, with a length of ${sorted[0].lengthOfDay}`
    );
  }

  response.send(500);
});
export default router;
