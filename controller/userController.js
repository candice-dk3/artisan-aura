import { getUsersDb } from "../model/userDb.js"

const getUsers = async (req, res) => {
    try {
      const users = await getUsersDb();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
}

export {getUsers}