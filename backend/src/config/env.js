import "dotenv/config";

export const ENV={
    PORT: process.env.PORT || 5001,
    MONGO_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    SENTRY_DSN: process.env.SENTRY_DSN,
    INNGEST_DSN: process.env.INNGEST_DSN,
    INNGEST_API_KEY: process.env.INNGEST_API_KEY,
};