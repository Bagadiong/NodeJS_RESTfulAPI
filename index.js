const mysql = require('mysql')
const express = require('express')
const app = express()
const body = require('body-parser')

app.use(body.json());


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
    console.log("Data displayed...")
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
    console.log("Data displayed...")
    })
     
})
//Delete an Item

app.delete('/inventory/items/:id', (req,res)=>{
    console.log("Deleting item: " + req.params.id)
    const itemID=req.params.id
    const query  ="DELETE FROM items WHERE id=? "
    console.log("Deleting data of item:" + itemID)
    connection.query(query,[itemID],(err,rows,fields)=>{
        if (err){
            console.log("Failed to delete item: " + err)
            res.sendStatus(500)
            return
        }

    res.send("Item:"+ itemID+ " Deleted Successfully")
    console.log("Item:"+ itemID+ " Deleted Successfully")
    })
})
//ADD item
app.post("/inventory/items",(req,res)=>{
    console.log("Adding item...")
    var jsonData=req.body
    const query="INSERT INTO items(name,qty,amount) VALUES (?,?,?)"
    connection.query(query,[jsonData.name,jsonData.qty,jsonData.amount],(err,results,fields)=>{
        if (err){
            console.log("Failed to add item: " + err)
            res.sendStatus(500)
            return
        }
        res.send("Inserted a new Item")
        console.log("Inserted a new Item")
    })
})

// UPDATE item
app.put("/inventory/items/:id",(req,res)=>{
    var jsonData=req.body
    const itemID=parseInt(req.params.id)
    const query="UPDATE items SET name=?,qty=?,amount=? WHERE id=?"
    connection.query(query,[jsonData.name,jsonData.qty,jsonData.amount,itemID],(err,results,fields)=>{
        if (err){
            console.log("Failed to add item: " + err)
            res.sendStatus(500)
            return
        }
        res.send("Update Successfully")
        console.log("Update Successfully")
    })
})