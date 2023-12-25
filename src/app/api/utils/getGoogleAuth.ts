import {GoogleAuth} from 'google-auth-library';

export const getGoogleAuth = ()=>{
  const keysEnvVar = process.env['CREDS'] ?? '';

  const keys = JSON.parse(keysEnvVar);

  return new GoogleAuth({
    credentials: keys,
    scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/spreadsheets']
  });
};
