import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const APP_ENV = process.env.NODE_ENV ?? "dev";

const database =
  process.env[APP_ENV === "test" ? "POSTGRES_TEST_DB" : "POSTGRES_DB"] ??
  "postgres";

export const db: Pool = new Pool({
  host: process.env.POSTGRES_HOST ?? "localhost",
  port: Number(process.env.POSTGRES_PORT) ?? 5432,
  user: process.env.POSTGRES_USER ?? "admin",
  password: process.env.POSTGRES_PASSWORD ?? "secret",
  database,
});

export default db;
