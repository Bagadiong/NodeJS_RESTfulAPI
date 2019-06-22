const mysql = require('mysql')
const express = require('express')
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'inventory'
})

app.listen(3000,()=>{
    console.log('Server is up and running..')
})
app.get("/",(req,res)=>{
    console.log("Hi Server")
    res.send("Hello from Andy")
})