import express from "express";
import cors from "cors"
import itemsRoute from './routes/itemsRoute.js'
import userRoute from './routes/userRoute.js'

let port = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    Credentials:true
}))

app.use(express.static('public'))

app.use('/', itemsRoute)
app.use('/',userRoute)

app.listen(port,(error)=>{
        if(error){ 
        console.log(error);
        return
    }
    console.log('http://localhost:'+port);
    
})
