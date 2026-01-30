import { Pool } from "pg";

export const pool= new Pool({
  user:'postgres.zinxiylluugznsqzdjgk',
  password:'tanvir483469$$',
  host:'aws-1-ap-southeast-1.pooler.supabase.com',
  port:'6543',
  database:'postgres',
  ssl: {
    rejectUnauthorized: false, 
  },
  max: 20, 
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
