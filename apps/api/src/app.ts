import { Hono } from "hono";
//　ここ
import { sql } from "drizzle-orm";
import { createDb } from "@repo/db";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

const db = createDb(databaseUrl);

export const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/health", (c) => {
    return c.json({ status: "ok" });
  })
  .get("/health/db", async (c) => {
    try {
      //　ここ
      await db.execute(sql`SELECT 1`);

      return c.json({
        status: "ok",
        database: "connected",
      });
    } catch (error) {
      console.error(error);

      return c.json(
        {
          status: "error",
          database: "disconnected",
        },
        503,
      );
    }
  });

export type AppType = typeof app;
