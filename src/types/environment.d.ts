export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string
      MONGO_URL_LOCAL: string
      PORT: Number
      NODE_ENV: string
    }
  }
}
