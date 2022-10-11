import {createPool} from 'mysql2/promise'
import {config} from 'dotenv'

const dotenv = config({path: './.env'})
/* 
export const pool = createPool({
    host: "localhost",
    port: 3307,
    user:"root",
    password: process.env.PASSDATABASE,
    database: "taskdb",
    
}) */

export const pool = createPool({
    host: "eu-cdbr-west-03.cleardb.net",
    user:"b9b059e13bd148",
    password: PASSDATABASEHEROKU,
    database: "heroku_96a9a3df21fb109",
    
})

