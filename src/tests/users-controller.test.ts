import request from "supertest";

import { app } from "@/app";

describe("userController", () => {
  it("should create a new user succesfully", async () => {
    const response = await request(app).post("/users").send({
      name: "Test User",
      email: "testuser@example.com",
      password: "senha12345",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Test User");
  });
});
