
import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import {connectToSocket} from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

dotenv.config();

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended: "true"}));
app.use("/api/v1/users", userRoutes);




const start = async()=>{
    const connectionDb = await mongoose.connect(process.env.MONGO_URI); //MongoURI from .env file(secured)
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host} `)
    server.listen(app.get("port"), ()=>{
        console.log("Listening to PORT 8000");
    });
}

start();

