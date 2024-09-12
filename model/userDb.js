import { pool } from '../config/config.js';

const queryDb = async (query, params) => {
  try {
    const [results] = await pool.query(query, params);
    return results;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
};

const getUsersDb = async () => queryDb('SELECT * FROM users');

const getUserDb = async (emailAdd) => {
  const [data] = await queryDb('SELECT * FROM users WHERE emailAdd = ?', [emailAdd])
  return data || null;
};

const getUserIdDb = async (id) => {
  const [data] = await queryDb('SELECT * FROM users WHERE userID = ?', [id])
  return data || null;
};

const insertUserDb = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, userProfilePicture) => {
  const hashedPassword = await bcrypt.hash(userPass, 10);
  await queryDb(
    `INSERT INTO users(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, userProfilePicture) VALUES (?,?,?,?,?,?,?,?,?)`,
    [firstName, lastName, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile, userProfilePicture]
  );
};

const deleteUserDb = async (userID) => queryDb('DELETE FROM users WHERE userID = ?', [userID]);

const updateUserDb = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, userProfilePicture, id) => {
  const hashedPassword = await bcrypt.hash(userPass, 10);
  await queryDb(
    `UPDATE users SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ?, userProfilePicture = ?, WHERE userID = ?`,
    [firstName, lastName, userAge, Gender, userRole, emailAdd, hashedPassword, userProfile, userProfilePicture, id]
  );
};

export { getUsersDb, getUserDb, getUserIdDb, insertUserDb, deleteUserDb, updateUserDb };