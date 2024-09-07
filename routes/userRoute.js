import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser, addItem} from '../controller/userController.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)

userRouter.get('/:id',getUser)

userRouter.post('/register',insertUser)

userRouter.patch('/update/:id',updateUser)

userRouter.delete('/delete/:id',deleteUser)

userRouter.post('/login',checkUser, loginUser)

userRouter.post('/cart/add', addItem);

export{userRouter}