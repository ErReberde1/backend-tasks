import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
const dotenv= config({path:'../.env'})

/**
 * It takes a token from the body of the request, verifies it, and if it's valid, it calls the next
 * function in the chain
 * @param req - The request object.
 * @param res - the response object
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 */
export const desencriptarToken = async(req, res, next)=>{
    const {token} = req.body;
    
    try{
        const resultadoId = await jwt.verify(token, process.env.KEY)
        
       if (resultadoId !== "jwt experired") return next()
        
       re.json(resultadoId)
        
    }
    catch(error){
        res.json(error.message)
    }
}