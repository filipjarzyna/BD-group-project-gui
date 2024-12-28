import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use encryption
    trustServerCertificate: true, // Disable for production
  },
  port: parseInt(process.env.DB_PORT, 10) || 1433,
};

let pool;

export async function getDBConnection() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}
