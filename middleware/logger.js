import { promises as fsPromises } from "fs";

export async function logger(request, response, next) {
  // read the headers from the request
  
  const date = new Date();
  const line = `${date.toISOString()} | ${request.ip} | ${request.method} | ${
    request.originalUrl
  } \n`;

  fsPromises.appendFile("log.txt", line).then(() => {
 
  });

  next();
}
