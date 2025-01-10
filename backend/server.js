
import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import chats from "./data/data.js";
import colors from 'colors';
//import userRoutes from './routes/userRoutes';

import connectToMongoDB from "./config/connectToMongoDB.js";

//import {app, server} from "./socket/socket.js";
const PORT  = process.env.PORT || 5000;
const app = express();
app.use(cors());
dotenv.config();


app.use(express.json());  //to parse the incoming requests with JSON payloads (from req.body)
app.get('/', (req, res)=>{
    res.send('API is running');
    res.send(chats);
    console.log("server!!!!!!".cyan.bold);
});
app.get('/api/chat', (req, res)=>{
    //res.send('API is running');
    res.send(chats);
    console.log("server!!!!!!".cyan.bold);
});
//app.use('/api/user', userRoutes);



app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`Server running onon port ${PORT} також внатурі`.rainbow.bold);
    console.log(`Server running onon port ${PORT} також внатурі`.cyan.bold);
    console.log(`Server running onon port ${PORT} також внатурі`.trap.bold);
    console.log(`Server running onon port ${PORT} також внатурі`.america.bold);
})
