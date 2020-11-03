var mongoose = require('mongoose');
var Orders = require('./models/Orders');
var {SingleOrder, PendingOrder} = require('./models/SingleOrder');

function seedDB(){
    //dummy data
    var data = [
        {
            phone: "932620110",
            address: "207/2336, Sector-6, C.G.S. Colony, Antop Hill, Mumbai-400037",
        },
        {
            phone: "932620110",
            address: "207/2336, Sector-6, C.G.S. Colony, Antop Hill, Mumbai-400037",
        },
        {
            phone: "932620110",
            address: "207/2336, Sector-6, C.G.S. Colony, Antop Hill, Mumbai-400037",
        },
        {
            phone: "932620110",
            address: "207/2336, Sector-6, C.G.S. Colony, Antop Hill, Mumbai-400037", 
        }
    ]

    //Remove All Campgrounds
    Orders.deleteMany({}, function(err){
        if(err)
            console.log(err);
        else{
            SingleOrder.deleteMany({}, (err) =>{
                if(err)
                    console.log(err);
                else{
                    data.forEach((seed) => {
                        Orders.create(seed, (err, newOrder) => {
                            if(err)
                                console.log(err);
                            else{
                                SingleOrder.create({
                                    flavour: "strawberry",
                                    wrafer: "plain", 
                                    toppings: ["tutti fruti", "chocolate chips"]
                                }, (err, singleOrder) => {
                                    if(err)
                                        console.log(err);
                                    else{
                                        newOrder.orders.push(singleOrder);
                                        newOrder.save();
                                    }
                                })
                            }
                        })
                        PendingOrder.deleteMany({}, (err) => {
                            if(err)
                                console.log(err);
                            else{
                                PendingOrder.create({
                                    flavour: "strawberry",
                                    wrafer: "plain", 
                                    toppings: ["tutti fruti", "chocolate chips"],
                                    nOrders: 2
                                })
                            }
                        })
                    })
                }
            })
        }
    })
}

module.exports = seedDB;