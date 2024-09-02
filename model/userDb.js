import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] =  await pool.query('SELECT * FROM users')
    return(data)
}
console.log(await getUsersDb());

const getUserDb = async(emailAdd)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd = ?',[emailAdd] )
    return(data)
}

const getUserIdDb = async(id)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE userID = ?',[id] )
    return(data)
}

const insertUserDb  = async( firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)=>{
    await pool.query(`INSERT INTO users(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?,?)`,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile ] )
}

const deleteUserDb = async(userID)=>{
    await pool.query('DELETE FROM users WHERE userID = ?',[userID] )
}

const updateUserDb = async(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id)=>{//this order does not
    await pool.query(`
        UPDATE users 
        SET firstName = ?,
        lastName = ?,
        userAge = ?,
        Gender = ?,
        userRole = ?, 
        emailAdd = ?, 
        userPass = ?, 
        userProfile = ? 
        WHERE userID = ?
        `,[firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, id] )//this order matters
}

export{getUsersDb ,getUserDb, getUserIdDb, insertUserDb, deleteUserDb, updateUserDb} 