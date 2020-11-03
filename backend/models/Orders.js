var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    phone : {type: String, default: undefined},
    address : {type: String, default: undefined},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SingleOrder"
    }]
});

module.exports = mongoose.model("Orders", OrderSchema);