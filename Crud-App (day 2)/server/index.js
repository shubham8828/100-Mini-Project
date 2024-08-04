import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors'
import route from "./route/user.route.js";

const app=express();
app.use(bodyParser.json())
app.use(cors());
dotenv.config();

const port=process.env.PORT||7000
const url=process.env.MONGO;


app.listen(port,()=>{
    console.log("Server is running on port-- "+port);
}) 

mongoose.connect(url)

.then(()=>{
    console.log("MongoDB Connected")
    
})
.catch((error)=>{console.log(error)})

app.use('/api',route)