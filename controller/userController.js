import {hash} from 'bcrypt'
import{getUsersDb,getUserIdDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/userDb.js'


const getUsers = async(req,res)=>{
    res.json(await getUsersDb())
}

const getUser =  async(req,res)=>{
    res.json(await getUserIdDb(req.params.id))
}

const insertUser = async(req,res)=>{
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body; 
    let hashedP = await hash(userPass,10,)
     // console.log(hashedP);
    if(hashedP.stack) throw (hashedP)
    await insertUserDb(firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
    res.send(await getUsersDb())
    console.log('Data was inserted successfully');  
}

const deleteUser = async(req,res)=>{
    let {id} = req.body;
    await deleteUserDb(req.params.id)
    res.send('delete successfully');
}
 
const updateUser = async(req,res)=>{
    let { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body;
    let users = await getUserIdDb(req.params.id)

    firstName? firstName=firstName : firstName = users.firstName
    lastName? lastName=lastName : lastName = users.lastName
    userAge? userAge=userAge : userAge = users.userAge
    Gender? Gender=Gender : Gender = users.Gender
    userRole? userRole=userRole : userRole = users.userRole
    emailAdd? emailAdd=emailAdd : emailAdd = users.emailAdd
    userPass? userPass=userPass : userPass = users.userPass
    userProfile? userProfile=userProfile : userProfile = users.userProfile
    
    res.send('Updated was succesfully');
    await updateUserDb(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, req.params.id)
}

const loginUser = async (req, res) => {
    res.json({
        message: 'You logged in successfully',
        token: req.body.token
    })
}

const addItem = async (req, res) => {
    try {
      const { itemID, itemQuantity } = req.body;
      const userID = req.user.id;
      const cartItem = await Cart.create({ userID, itemID, itemQuantity });
      res.json(cartItem);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Error adding item to cart' });
    }
}
const logoutUser = async (req, res) => {
    try {
      req.token = null;
      res.json({ message: 'You logged out successfully' });
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ message: 'Error logging out' });
    }
  }

export{getUsers,getUser,insertUser,deleteUser,updateUser, loginUser, logoutUser, addItem}