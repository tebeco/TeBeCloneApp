import { CapacitorConfig } from '@capacitor/cli';
import dotenv from "dotenv";

dotenv.configDotenv();

const config: CapacitorConfig = {
  appId: 'com.tebeclone.app',
  appName: 'tebeclone-app',
  webDir: 'dist',
  server: {
    androidScheme: process.env.VITE_MOBILE_SCHEME,
    hostname: process.env.VITE_MOBILE_HOSTNAME
  }
};

export default config;
