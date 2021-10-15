import dotenvSafe from 'dotenv-safe';
import { join } from 'path';

const cwd = process.cwd();

console.log({ cwd });
console.log({ dotenvSafe });

const root = join.bind(cwd);

console.log({ root });

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

export const config = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
