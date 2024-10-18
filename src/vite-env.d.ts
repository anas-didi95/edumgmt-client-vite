/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  readonly VITE_APP_EDUMGMT_URL: string;
  readonly VITE_APP_EDUMGMT_DEV_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
