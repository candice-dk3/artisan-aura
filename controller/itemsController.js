import {getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb} from '../model/itemsDb.js'

const getItems = async(req,res)=>{
    res.json(await getItemsDb()) 
}

export {getItems}