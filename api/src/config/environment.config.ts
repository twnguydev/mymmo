export const getEnvPath = (): string => {
  const env: string = process.env.NODE_ENV || 'development';
  return `../.env.${env === 'production' ? 'prod' : 'dev'}`;
};