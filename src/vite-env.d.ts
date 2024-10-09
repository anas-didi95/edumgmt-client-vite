/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  readonly VITE_APP_EDUMGMT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
