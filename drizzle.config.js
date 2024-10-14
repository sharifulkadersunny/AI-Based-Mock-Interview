/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://AiMockInterview_owner:vb4aNH8fAwQh@ep-plain-voice-a5zoix8u.us-east-2.aws.neon.tech/AiMockInterview?sslmode=require',
    }
};