import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import {connectToSocket} from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));

app.get("/home", (req,res) => {
    return res.json({"hello": "world"});
});

const start = async()=>{
    const connectionDb = await mongoose.connect("mongodb+srv://tripathihimanshu:himanshu6905@cluster0.hbgroai.mongodb.net/")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host} `)
    server.listen(app.get("port"), ()=>{
        console.log("Listening to PORT 8000");
    });
}

start();

