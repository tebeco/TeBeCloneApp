/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OIDC_AUTHORITY: string;
  readonly VITE_OIDC_REDIRECT_URI: string;
  readonly VITE_MOBILE_SCHEME: string;
  readonly VITE_MOBILE_HOSTNAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
