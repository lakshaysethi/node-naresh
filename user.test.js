const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./index");

describe("GET /users", () => {
    it("should get all users", async () => {
      const res = await request(app).get("/users");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });