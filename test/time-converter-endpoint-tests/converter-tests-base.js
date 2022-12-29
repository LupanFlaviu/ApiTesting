import supertest from "supertest";

const config = require("../../environments/QA/configuration.json");

export const request = supertest(config.baseUrl);
