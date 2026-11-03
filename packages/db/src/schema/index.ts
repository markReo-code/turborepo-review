import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const usersSchema = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", {
    length: 255,
  }).notNull(),

  email: varchar("email", { length: 255 }).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
