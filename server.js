

const express = require('express')


const tacos = [ {
    tacoNumber: 1,
    name: "Chicken Taco",
    meat: "Chicken",
    guacamole: true
}, {
    tacoNumber: 2,
    name: "Steak Taco",
    meat: "Steak",
    guacamole: false
}, {
    tacoNumber: 3,
    name: "Pork Taco",
    meat: "Pork",
    guacamole: false
}]
const orders = []

const server = express()
server.use(express.json())

server.get("/api/tacos",(req,res)=>{
    res.send(tacos)    
})

server.get("/api/orders",(req,res)=>{
    res.send(orders)    
})

server.post("/api/orders", (req, res) => {
     const new_order = req.body;
     console.log(new_order);
     orders.push(new_order);
     res.send(orders)  
})

server.put("/api/orders/:id", (req, res) => {
    const orderNumber = req.params.id;
    const orderIndex = orders.findIndex(o=> o.orderNumber == orderNumber)
    const order = req.body;
    console.log(order);
    orders[orderIndex] = order
    res.send(orders)
})

server.del("/api/orders/:id", (req,res) => {
    const orderNumber = req.params.id;
    const orderIndex = orders.findIndex(o=> o.orderNumber == orderNumber)
    orders.splice(orderIndex, 1)
    res.send(orders)
})


server.listen(4001, ()=> {
    console.log("Server running at http://localhost:4001");
})


