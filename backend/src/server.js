import "../instrument.mjs";
import express from 'express';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import {clerkMiddleware} from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './config/inngest.js';
import chatRoutes from './routes/chat.route.js';
import * as Sentry from "@sentry/node";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true}));
app.use(clerkMiddleware());

app.use("/api/inngest",serve({client: inngest, functions}));
app.use("/api/chat", chatRoutes);

app.get("/debug-sentry", (req, res) => {
    throw new Error("My first Sentry error!");
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

Sentry.setupExpressErrorHandler(app);

const startServer = async () =>{
    try{
        await connectDB();
        if(ENV.NODE_ENV !== "production"){
            app.listen(ENV.PORT, () => {
            console.log('Server is running on port:', ENV.PORT);
            connectDB();
          });
        }
    }catch(error){
        console.error("Error starting server", error);
        process.exit(1);
    }
}

startServer();

export default app;
