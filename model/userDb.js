import {pool} from '../config/config.js';

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users');
    return data;
  }

export {getUsersDb}