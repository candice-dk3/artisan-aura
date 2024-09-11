import express from "express";
import cors from "cors"
import {itemRouter} from './routes/itemRoute.js'
import {userRouter} from './routes/userRoute.js'

let port = process.env.PORT || 1003

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials:true
}))

app.use(express.static('public'))

app.use('/items', itemRouter)
app.use('/users', userRouter)
app.post('/cart/add', async (req, res) => {
    try {
      const { itemID, itemQuantity } = req.body;
      const userID = req.user.ID;
      const cartItem = await Cart.create({ userID, itemID, itemQuantity });
      res.json(cartItem);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Error adding item to cart' });
    }
  });

app.listen(port,(error)=>{
        if(error){ 
        console.log(error);
        return
    }
    console.log(`http://localhost:${port}`);
    
})
