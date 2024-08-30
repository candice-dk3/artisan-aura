import express from 'express'
import { getItems, getItem, addItem, updateItem, deleteItem } from '../controller/itemsController.js'

const itemRouter = express.Router()

itemRouter.get('/' , getItems)

itemRouter.get('/:id', getItem)

itemRouter.post('/add', addItem)

itemRouter.patch('/update/:id', updateItem)

itemRouter.delete('/delete/:id', deleteItem)

export {itemRouter} 