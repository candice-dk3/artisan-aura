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
// Cart Queries

const fetchCarts = async (req, res) => {
  try {
    const strQry = `
      SELECT distinct c.userID, CONCAT(u.firstName, '',u.lastName ) AS fullName,
          group_concat(DISTINCT p.itemName) 'Item',
          sum(p.itemPrice * c.quantity)  'Total Price',
          sum(c.quantity) 'Quantity'
      FROM carts c
      JOIN users u ON c.userID = u.userID
      JOIN items p ON c.itemID = p.itemID
      group by c.userID;
    `;
    const [results] = await pool.query(strQry);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchuserCart = async (req, res) => {
  try {
    const strQry = `
      SELECT c.userID, CONCAT(u.firstName, '', u.lastName) AS fullName,
          i.itemID,
          i.itemName 'item',
          i.itemPrice * c.quantity  'Total Price',
          c.quantity 'Quantity'
      FROM Carts c
      JOIN users u ON c.userID = u.userID
      JOIN items p ON c.itemID = p.itemID
      WHERE c.userID = ?;
    `;
    const [results] = await pool.query(strQry, [req.params.id]);
    res.json({
      status: res.statusCode,
      results
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchadduserCart = async (req, res) => {
  try {
    const strQry = `
      INSERT INTO Carts
      (userID, itemID, quantity)
      VALUES (?, ?, ?);
    `;
    await pool.query(strQry, [req.params.id, req.body.itemID, req.body.quantity]);
    res.json({
      status: res.statusCode,
      msg: 'Added to cart'
    });
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    });
  }
}
const fetchupdateUserCart = async (req, res) => {
  try {
    const strQry = `
      UPDATE Carts
      SET quantity = ?
      WHERE itemID = ? AND userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.body.quantity, req.params.itemID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'The quantity has been updated. Aragato:grin:'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteItem = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE itemID = ? AND userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.itemID, req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'An item was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Item not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}
const deleteCart = async (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE userID = ?;
    `;
    const [result] = await pool.query(strQry, [req.params.id]);
    if (result.affectedRows > 0) {
      res.json({
        status: res.statusCode,
        msg: 'A cart was removed'
      });
    } else {
      res.json({
        status: 404,
        msg: 'Cart not found'
      });
    }
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    });
  }
}


export{getUsers,getUser,insertUser,deleteUser,updateUser, loginUser, addItem}