import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/connectdb.js'
import router from './routes/user-routes.js'
const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()
const port = process.env.DB_PORT


app.use(router)

app.use("/", (req,res)=>{
    res.status(200).json({
        status:"OK"
    })
})





connectDB()


app.listen(port || 4000)
