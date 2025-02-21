
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//import chats from "./data/data.js";
import colors from 'colors';
import connectToMongoDB from "./config/connectToMongoDB.js";
//import connectCloudinary from "./config/cloudinary.js";

import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";

const PORT  = process.env.PORT || 5000;
const app = express();
app.use(cors());
dotenv.config();
connectToMongoDB();

app.use(express.json());  //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);
//connectCloudinary()

app.listen(PORT, ()=> {
    // connectToMongoDB();
    console.log(`Server running onon port ${PORT} також внатурі`.rainbow.bold);
    console.log(`Server running onon port ${PORT} тttакож ввнатурі`.cyan.bold);
    console.log(`Server running onon port ${PORT} також внатурі`.america.bold);
})
