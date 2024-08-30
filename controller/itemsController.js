import { getItemsDb, getItemDb, addItemDb, deleteItemDb, updateItemDb } from '../model/itemsDb.js';

const getItems = async (req, res) => {
  try {
    const items = await getItemsDb();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching items' });
  }
};

const getItem = async (req, res) => {
  try {
    const item = await getItemDb(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.json(item);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching item' });
  }
};

const addItem = async (req, res) => {
    try {
      const { itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL } = req.body;
      
    //   if (typeof itemPrice !== 'number' || isNaN(itemPrice)) {
    //       throw new Error('Invalid item price. Please enter a valid number.');
    //     }
      const newItem = await addItemDb(itemName, itemDesc, itemPrice, itemQuantity, itemCategory, itemURL);
      res.json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error adding item' });
    }
  };

const updateItem = async (req, res) => {
  try {
    const { itemID } = req.params;
    const { itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL } = req.body;
    const item = await getItemDb(itemID);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      await updateItemDb(itemName, itemDesc, itemCategory, itemPrice, itemQuantity, itemURL, itemID);
      res.json({ message: 'Item updated successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating item' });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { itemID } = req.params;
    await deleteItemDb(itemID);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item' });
  }
};

export { getItems, getItem, addItem, deleteItem, updateItem }