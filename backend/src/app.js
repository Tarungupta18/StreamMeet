import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";


import mongoose from "mongoose";

import cors from "cors";
import { connect } from "node:http2";
import { connectToSocket } from "./controllers/socketManager.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);
const uri = process.env.MONGO_URL;

app.set("port", (process.env.PORT || 8000));

app.use(cors());
import userRoutes from "./routes/users.routes.js";

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);


const start = async () => {
    const connectDB = await mongoose.connect(uri)
    console.log(`MONGO connected DB Host:${connectDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Listening on port:8000");
    });
}

start();