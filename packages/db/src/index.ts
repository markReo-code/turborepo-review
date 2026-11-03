import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// HonoからPostgreSQLに接続するためのコードを記述するファイルです。
export const createDb = (databaseUrl: string) => {
  const client = postgres(databaseUrl);

  return drizzle(client);
};
