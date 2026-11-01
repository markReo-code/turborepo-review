import { Hono } from "hono";

export const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/health", (c) => {
    return c.json({ status: "ok" });
  });

export type AppType = typeof app;
