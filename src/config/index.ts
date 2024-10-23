import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.db_url,
  NODE_ENV : process.env.NODE_ENV,
  jwt_access_secret : process.env.jwt_secret
};