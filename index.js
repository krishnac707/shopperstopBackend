import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Login, Register, getCurrentUser } from "./controllers/User.controllers.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("working...")
})

//buyers and Seller
app.post("/register",Register);
app.post("/login", Login)
app.post("/get-current-user", getCurrentUser);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to db!!!!");
})

app.listen(8007,()=>{
    console.log("server running on port 8007");
})
