const taskCtrl = {}

import {pool} from '../bbdd/database.js'



taskCtrl.getTasks = async (req, res)=>{
    
    const result = await pool.query('SELECT * FROM tasks')
   
    res.json(result[0].sort())
    
}


taskCtrl.postTasks =async (req, res)=>{
    const {title, description, status, estado, author} = req.body

    try{
    const saveTask = await pool.query(
        "INSERT INTO tasks(title, description, status, estado, author) VALUES (?,?,?,?,?)", 
        [title, description, status, estado, author])
   
    res.json({message: "Tarea guardada"})
    }catch(error){
        res.json("Estas intentado guardar un task con datos erróneos")
    }
}

taskCtrl.getTask = async (req, res)=>{
    const [rows,fields] = await pool.query(`SELECT title, description, status FROM tasks WHERE id=${req.params.id}`)
    res.json(rows)

}
taskCtrl.putTask = async (req, res)=>{
    const {title, description, status} = req.body
    const result = await pool.query(`UPDATE tasks SET ? WHERE id=?`, [{title, description, status}, req.params.id])
    res.json({"message":`El task con id ${req.params.id} ha sido modificado`})
}

taskCtrl.deleteTask = async(req, res)=>{
    
    try{
    const idTask = req.params.id

    const result = await pool.query('DELETE FROM tasks WHERE id=?', [idTask])

    console.log("borrando")
    res.json({"message": "task borrado "})
    }catch(e){
        res.json(e.message)
    }
}


export default taskCtrl