import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const user = process.env.DB_USER
const pass = process.env.DB_PASSWORD 
const mongoURL= `mongodb+srv://${user}:${pass}@convite.w9zgv7u.mongodb.net/`

export const connectDB = async ()=>{
    try{
        await mongoose.connect(mongoURL)
        console.log("conectado ao mongoDB com sucesso")
    }catch(error){
        console.log(error)
    }
}