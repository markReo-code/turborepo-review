import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 8080);

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`API running on http://localhost:${info.port}`);
  },
);
