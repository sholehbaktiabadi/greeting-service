import * as dotenv from 'dotenv';
dotenv.config();

export const Env = () => ({
  SERVER_ENV: process.env.SERVER_ENV,
  SERVER_PORT: +process.env.SERVER_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
