import {pool} from '../bbdd/database.js'

const userCtrl = {}



userCtrl.getMyUser = async (req, res)=>{
    try{
        const {id} = req.body

        const [rows] = await pool.query(`SELECT user,password,email FROM users WHERE id=${id}`)
        console.log(rows)
        res.json(rows)

    }catch(error){
        res.json('parece que ha habido algún problema...')
    }

    console.log("cambiando...")
}

userCtrl.postMyUser = async(req, res)=>{
    try{
        console.log("cambiando...")
        const id = req.params.id
        const {user,password, email} = req.body

        const [rows] = await pool.query(`UPDATE users SET ? WHERE id=?`, [{user,password, email}, id])

        res.json("Los datos del usuario han ido modificados")
    }catch(error){
        console.log(error.message)
    }
}

export default userCtrl