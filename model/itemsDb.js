import {pool} from '../config/config.js'

const getItemsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM items')
    return data
}

const getItemDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM items WHERE itemID = ?',[id])
    return data
}

const addItemDb = async(itemName, itemDesc, itemCategory, itemPrice, itemQuantity,itemURL)=>{
    await pool.query(`
        INSERT INTO items (itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL)
        VALUES (?,?,?,?,?,?,?)
        `,[itemName,itemDesc,itemCategory,itemPrice,itemQuantity,itemURL]
    )
}

const deleteItemDb = async(itemID)=>{
    await pool.query('DELETE FROM items WHERE itemID = ?',[itemID] )
}

const updateItemDb = async( itemName, itemDesc, itemCategory, itemPrice,itemQuantity,itemURL,id )=>{
    await pool.query('UPDATE products SET itemName = ?,itemDesc = ?,itemPrice = ?,itemQuantity = ? ,itemCategory = ?,itemURL = ?,WHERE itemID = ?',[itemName, itemDesc, itemPrice, itemQuantity, itemCategory,itemURL,id] )
}

export {getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb}