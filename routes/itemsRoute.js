import express from 'express'
import { fetchItems } from '../controller/itemsController.js'

const router = express.Router()

router.get('/', fetchItems)

export default router