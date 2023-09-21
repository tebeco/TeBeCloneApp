import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tebeclone.app',
  appName: 'tebeclone-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
