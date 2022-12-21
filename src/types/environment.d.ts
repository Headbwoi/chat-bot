export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string
      //   DB_USER: string
      //   ENV: "test" | "dev" | "prod"
    }
  }
}
