import { Pool } from "pg";

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

const pool =
  global.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL!,
  });

if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

export default pool;