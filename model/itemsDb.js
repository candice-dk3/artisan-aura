import {pool} from '../config/config.js';

const getItemsDb = async()=>{
  let [data] = await pool.query('SELECT * FROM items');
  return data;
}

const getItemDb = async (id) =>{
  const [data] = await pool.query('SELECT * FROM items WHERE itemID = ?', [id]);
  if (!data) {
    return null
  }
  return data;
}

const addItemDb = async (itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL) => {
    try {
      await pool.query(`
        INSERT INTO items (itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL)
        VALUES (?,?,?,?,?,?)
        `, [itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL]);
      return { message: 'Item added successfully' };
    } catch (error) {
      return { message: 'Error adding item' };
    }
};

const deleteItemDb = async(id)=>{
  await pool.query('DELETE FROM items WHERE itemID = ?',[id]);
  return { message: 'Item deleted successfully' };
}

const updateItemDb = async(itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL, itemID)=>{
  await pool.query('UPDATE items SET itemName = ?, itemDesc = ?, itemPrice = ?, itemQuantity = ?, itemCategory = ?, itemURL = ? WHERE itemID = ?',
    [itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL, itemID]);
  return { message: 'Item updated successfully' };
}

export {getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb}