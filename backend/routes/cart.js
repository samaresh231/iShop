const express = require("express");
const { PendingOrder } = require("../models/SingleOrder");
const router = express.Router();

router.get("/", function(req, res) {
    PendingOrder.find({}, (err, pendingOrderList) => {
        if(err)
            console.log(err);
        else
            res.json(pendingOrderList);
    })
});

router.post("/new", (req, res) => {
    PendingOrder.create(req.body, (err, newOrder) =>{
        if(err)
            console.log(err);
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    PendingOrder.findByIdAndRemove(id, (err) => {
        if(err)
            console.log(err);
    })
})

module.exports = router;