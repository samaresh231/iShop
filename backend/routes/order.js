const express = require("express");
const Orders = require("../models/Orders");
const { SingleOrder, PendingOrder} = require("../models/SingleOrder");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hey bro");
})

router.post("/new", (req, res) => {
    Orders.create(req.body, (err, newOrder) =>{
        if(err)
            console.log(err);
        else{
            PendingOrder.find({}, (err, pendingOrderList) => {
                if(err)
                    console.log(err);
                else if(pendingOrderList){
                    pendingOrderList.forEach((order) => {
                        const {wrafer, flavour, toppings} = order;
                        SingleOrder.create({wrafer: wrafer, flavour: flavour, toppings: toppings}, (err, singleOrder) => {
                            if(err)
                                console.log(err);
                            else{
                                newOrder.orders.push(singleOrder);
                                console.log(newOrder);
                            }
                        })
                    })
                    newOrder.save();
                    console.log(newOrder);
                }
                else
                    res.status(400);
            })
        }
    })
    console.log("I am samaresh");
})

module.exports = router;