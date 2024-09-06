import express from "express";
import cors from "cors"
import {itemRouter} from './routes/itemRoute.js'
import {userRouter} from './routes/userRoute.js'

let port = process.env.PORT || 1003

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))

app.use(express.static('public'))

app.use('/items', itemRouter)
app.use('/users', userRouter)

app.listen(port,(error)=>{
        if(error){ 
        console.log(error);
        return
    }
    console.log(`http://localhost:${port}`);
    
})
