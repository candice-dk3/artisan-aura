// import {pool} from '../config/config.js';

// const getUsersDb = async()=>{
//     let [data] = await pool.query('SELECT * FROM users');
//     return data;
// }

// const getUserDb = async (id) =>{
//     const [data] = await pool.query('SELECT * FROM users WHERE userID = ?', [id]);
//     if (!data) {
//       return null
//     }
//     return data;
// }

// const addUserDb = async (userFirstName, userLastName, userAge, userGender, userEmail, userUserName) => {
//   try {
//     await pool.query(`
//       INSERT INTO user (itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL)
//       VALUES (?,?,?,?,?,?)
//       `, [itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL]);
//     return { message: 'Item added successfully' };
//   } catch (error) {
//     return { message: 'Error adding item' };
//   }
// }

// const deleteUserDb = async(id)=>{
//   await pool.query('DELETE FROM items WHERE itemID = ?',[id]);
//   return { message: 'Item deleted successfully' };
// }

// const updateUserDb = async(itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL, itemID)=>{
//   await pool.query('UPDATE items SET itemName = ?, itemDesc = ?, itemPrice = ?, itemQuantity = ?, itemCategory = ?, itemURL = ? WHERE itemID = ?',
//     [itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL, itemID]);
//   return { message: 'Item updated successfully' };
// }

// export {getUsersDb, getUserDb, addUserDb, deleteUserDb, updateUserDb}