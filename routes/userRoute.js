import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser, addItem} from '../controller/userController.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js'
import { fetchCarts, fetchuserCart, fetchadduserCart, fetchupdateUserCart, deleteItem, deleteCart } from '../model/cartDb.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)

userRouter.get('/singleuser/:id',getUser)

userRouter.post('/register',insertUser)

userRouter.patch('/update/:id',updateUser)

userRouter.delete('/delete/:id',deleteUser)

userRouter.post('/login',checkUser, loginUser)

userRouter.post('/cart/add', addItem);

userRouter.get('/carts', fetchCarts)
userRouter.get('/:id/cart', fetchuserCart)
userRouter.post('/:id/cart', fetchadduserCart)
userRouter.patch('/:id/cart/:itemID', fetchupdateUserCart)
userRouter.delete('/:id/cart', deleteCart)
userRouter.delete('/:id/cart/:itemID', deleteItem)
 
export{userRouter}
