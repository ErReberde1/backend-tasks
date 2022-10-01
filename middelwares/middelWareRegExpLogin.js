import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const dotenv= config({path:'../.env'})

export const regExpFunctionLogin = async (req, res, next)=>{
    const {email, password} = req.body;


    const regExpEmail = await /^<|$>/.test(email)

  
    if(regExpEmail) return res.json({"message": 'Los caracterés introducidos son erróneos'})

    const regExpPassword = await /^<|$>/.test(password)

    
    if(regExpPassword) return res.json({"message": 'Los caracterés introducidos son erróneos'})

    next()

}