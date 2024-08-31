import { getUsersDb, getUserDb } from "../model/userDb.js"

const getUsers = async (req, res) => {
    try {
      const users = await getUsersDb();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
}

const getUser = async (req, res) => {
    try {
      const user = await getUserDb(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching user' });
    }
  };

export {getUsers, getUser}