declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_MOCKING: string | undefined;
      NEXT_PUBLIC_BASE_URL: string | undefined;
    }
  }
  interface Window {}
}
