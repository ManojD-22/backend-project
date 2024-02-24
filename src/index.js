import dotenv from "dotenv";
import connectDb from "./database/index.js";

dotenv.config({
    path: './env'
})

connectDb()



/*
import mongoose from 'mongoose';

import { DB_NAME } from './constants';

import  express from "express";
const app = express();

( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on  port ${process.env.PORT}`);
        })
    }catch(error){
        console.error("Error: ", error);
        throw error;
    }
})()
*/