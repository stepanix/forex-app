import { env } from 'process';

export const environment = {
  production: true,
  version: env.npm_package_version,
  baseUrl: 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&apikey=MKXW8BM8MF3F9DD&'
};
