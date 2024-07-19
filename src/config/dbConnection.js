import mongoose from "mongoose";

export const connectToDatabase = async ()=>{
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};