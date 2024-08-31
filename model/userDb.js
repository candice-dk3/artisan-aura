import {pool} from '../config/config.js';

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users');
    return data;
}

const getUserDb = async (id) =>{
    const [data] = await pool.query('SELECT * FROM users WHERE userID = ?', [id]);
    if (!data) {
      return null
    }
    return data;
}

export {getUsersDb, getUserDb}