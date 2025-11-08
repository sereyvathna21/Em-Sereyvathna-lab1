import request from "supertest";
import app from "./app.js";
import { expect } from "chai";

describe("Express App", () => {
  describe("GET /", () => {
    it("should return Hello, GitHub Actions!", async () => {
      const res = await request(app).get("/");
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Hello, GitHub Actions!");
    });

    it("should handle different HTTP methods", async () => {
      const res = await request(app).post("/");
      expect(res.status).to.equal(404);
    });
  });

  describe("Non-existent routes", () => {
    it("should return 404 for unknown routes", async () => {
      const res = await request(app).get("/non-existent");
      expect(res.status).to.equal(404);
    });
  });
});
