import express from 'express'
import http from 'http'
import cors from 'cors'
import morgan from 'morgan'
import TasksRouter from './routers/task.router.js'
import deleteTasksRouter from './routers/deletetask.router.js'
import getTasksRouter from './routers/gettask.router.js'
import userSigInRouter from './routers/authSignin.router.js' 
import userSigUpRouter from './routers/authSignup.router.js'
import userRouter from './routers/user.router.js'
import {desencriptarToken} from './middelwares/authMiddelWare.js'
import {config} from 'dotenv'
import {regExpFunction} from './middelwares/middelWareRegExRegister.js'
import {regExpFunctionLogin} from './middelwares/middelWareRegExpLogin.js'
const dotenv= config({path:'./.env'})



/* import UserRouter from './routers/user.router.js' */
/* Creating a server and listening to a port. */

const app = express()

const server = http.createServer(app)

const PORT = process.env.PORT || 4001

server.listen(PORT, ()=>{
    console.log(`Servidor conectado en puerto ${PORT}`)
})

//middelwares

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


//routers

app.use('/api/tasks',desencriptarToken, TasksRouter)
app.use('/api/signin', regExpFunctionLogin,userSigInRouter)
app.use('/api/signup',regExpFunction, userSigUpRouter)
app.post('/api/token',desencriptarToken)
app.use('/api/tasks/delete', desencriptarToken, deleteTasksRouter)
app.use('/api/tasks/gettasks',desencriptarToken, getTasksRouter)
app.use('/api/users',desencriptarToken, userRouter  )
/* app.use('/api/tasks', UserRouter) */