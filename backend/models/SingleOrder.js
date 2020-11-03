var mongoose = require('mongoose');

var SingleOrderSchema = new mongoose.Schema({
    wrafer: {type: String},
    flavour: {type: String},
    toppings: [{type: String}]
})

module.exports = {
    SingleOrder: mongoose.model("SingleOrder", SingleOrderSchema),
    PendingOrder: mongoose.model("PendingOrder", SingleOrderSchema)
}