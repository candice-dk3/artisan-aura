import {pool} from '../config/config.js'

const getItemsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM items')
    return data
} 

const getItemDb = async(itemID)=>{
    let [[data]] = await pool.query('SELECT * FROM bwdqoyqxempbmqvc0owf.items WHERE itemID = ?',[itemID])
    return data
}

const addItemDb = async(itemName, itemDesc, itemPrice, itemQuantity, itemCategory,itemURL)=>{
    await pool.query(`
        INSERT INTO items (itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL)
        VALUES (?,?,?,?,?,?)
        `,[itemName,itemDesc,itemPrice,itemQuantity,itemCategory,itemURL]
    )
}

const deleteItemDb = async(itemID)=>{
    await pool.query('DELETE FROM bwdqoyqxempbmqvc0owf.items WHERE itemID = ?',[itemID] )
}

const updateItemDb = async( itemName, itemDesc, itemPrice,itemQuantity, itemCategory,itemURL,itemID )=>{
    await pool.query('UPDATE bwdqoyqxempbmqvc0owf.items SET itemName = ?,itemDesc = ?,itemPrice = ?,itemQuantity = ? ,itemCategory = ?,itemURL = ?,WHERE itemID = ?',[itemName, itemDesc, itemPrice, itemQuantity, itemCategory,itemURL,itemID] )
}

// console.log(await getItemDb);

export {getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb}