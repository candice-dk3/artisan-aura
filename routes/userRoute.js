import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser, addItem} from '../controller/userController.js'
import { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteItem, deleteCart } from '../model/cartDb.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js'

const userRouter = express.Router()

//User Routes
userRouter.get('/', getUsers)

userRouter.get('/singleuser/:id',getUser)

userRouter.post('/register',insertUser)

userRouter.patch('/update/:id',updateUser)

userRouter.delete('/delete/:id',deleteUser)

userRouter.post('/login',checkUser, loginUser)

// Cart Routes
userRouter.get('/carts', fetchCarts)

userRouter.post('/cart/add', addItem);

userRouter.get('/:id/cart', fetchuserCart)

userRouter.post('/:id/cart', fetchadduserCart)

userRouter.patch('/:id/cart/:itemID', fetchupdateUserCart)

userRouter.delete('/:id/cart', deleteCart)

userRouter.delete('/:id/cart/:itemID', deleteItem)
 
export{userRouter}
