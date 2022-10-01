import {pool} from '../bbdd/database.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const dotenv= config({path:'../.env'})

const signUpCtrl ={}


signUpCtrl.postUser = async(req, res)=>{

    try{
    const {user, password, email} = req.body


    const foundMail = await pool.query(`SELECT * FROM users WHERE email=?`, [email])

    
    if (foundMail[0].length !== 0) return res.json({"message": "El mail o username ya están registrados"})

    const foundUser = await pool.query(`SELECT * FROM users WHERE user=?`,[user])

    if(foundUser[0].length !== 0) return res.json({"message" : "El mail o username ya están registrados"})


    const salt = await bcrypt.genSalt(10)

    const passWordEncripted = await bcrypt.hash(password, salt)

    const [rows, fields] = await pool.query(`INSERT INTO users (user, email, password) VALUES(?, ?, ?)`, [user, email, passWordEncripted])
    
    const token = jwt.sign({id: rows.insertId}, process.env.KEY, {
        expiresIn: 86400
    })

    res.json({
        "token": token,
        "message": "Cuenta creada",
        "id": rows.insertId
    })
    
    /* const token = await jwt.sign() */
    
    }catch(error){
        res.status(200).json({error, "message": "fail"})
    }
}

export default signUpCtrl