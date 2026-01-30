import { Pool } from "pg";

export const pool= new Pool({
  user:process.env.PG_USER,
  password:process.env.PG_PASSWORD,
  host:process.env.PG_HOST,
  port:process.env.PG_PORT,
  database:process.env.PG_DATABASE,
  ssl: {
    rejectUnauthorized: false, 
  },
  max: 20, 
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
