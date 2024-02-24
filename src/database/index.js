import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\nMongoDb connected !! database HOST : $
        {connectionInstance.connection.host}`);
        
    }catch(error){
        console.log("DataBase Connection Error:" , error);
        process.exit(1);
    }
}

export default connectDb;