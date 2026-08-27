import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl:  process.env.BASE_URL     || 'https://practicetestautomation.com',
  username: process.env.APP_USERNAME || 'student',
  password: process.env.APP_PASSWORD || 'Password123',
};