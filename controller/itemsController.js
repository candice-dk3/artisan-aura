import {getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb} from '../model/itemsDb.js'

const getItems = async(req,res)=>{
    res.json(await getItemsDb())  
}

const getItem = async(req,res)=>{
    res.json(await getItemDb(req.params.itemID))
}

const addItem = async(req,res)=>{
    let {itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL} = req.body; 

    await addItemDb(itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL)
    res.send('Data was inserted successfully')
}

const updateItem = async(req,res)=>{
    let {itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL} = req.body;
    let items = await getItemDb(req.params.itemID)
    itemName? itemName=itemName : itemName = items.itemName
    itemDesc? itemDesc=itemDesc : itemDesc = items.itemDesc
    itemCategory? itemCategory=itemCategory : itemCategory = items.itemCategory
    itemPrice? itemPrice=itemPrice : itemPrice = items.itemPrice
    itemQuantity? itemQuantity=itemQuantity : itemQuantity = items.itemQuantity
    itemURL? itemURL=itemURL : itemURL  = items.itemURL

    res.send('Updated was succesfully');
    await updateItemDb(itemName, itemDesc, itemCategory, itemPrice, itemQuantity,itemURL,req.params.itemID)
}

const deleteItem = async(req,res)=>{
    let {itemID} = req.body; 
    await deleteItemDb(req.params.itemID)
    res.send('Deleted successfully');
}
export {getItems, getItem, addItem, deleteItem, updateItem}