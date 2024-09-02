import express from 'express'
import{getUsers,insertUser,getUser,updateUser,deleteUser, loginUser} from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.get('/', getUsers)

userRouter.get('/:id',getUser)

userRouter.post('/register',insertUser)

userRouter.patch('/update/:id',updateUser)

userRouter.delete('/delete/:id',deleteUser)

userRouter.post('/login',checkUser, loginUser)

export{userRouter}