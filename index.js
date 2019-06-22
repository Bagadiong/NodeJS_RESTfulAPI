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
//DEFAULT ROUTE
app.get("/",(req,res)=>{
    console.log("Hi Server")
    res.send("Hello from Andy")
})

//GET All Item
app.get("/inventory/items/",(req,res)=>{
    console.log("Getting all data...")

    const query = "SELECT * FROM items"
    connection.query(query,(err,rows,fields)=>{
        if (err){
            console.log("Failed to query the items: " + err)
            res.sendStatus(500)
            return
      }
    res.json(rows)
    })

})

//GET an Item
app.get("/inventory/items/:id",(req,res)=>{
    console.log("Getting data of item: " + req.params.id)

    
    const query = "SELECT * FROM items WHERE id=?"
    const itemID= req.params.id
    connection.query(query,[itemID],(err,rows,fields)=>{
        if (err){
            console.log("Failed to query the item: " + err)
            res.sendStatus(500)
            return
        }
    res.json(rows)
    })
     
})