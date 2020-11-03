const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const Orders = require('./models/Orders');
const {SingleOrder} = require('./models/SingleOrder');
const mongoose = require('mongoose');
const seedDB = require('./seeds');

const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");

mongoose.connect('mongodb://localhost/ishop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cart', cartRouter);
app.use('/order', orderRouter);

seedDB();

app.listen(5000, () =>{
    console.log("listening on port 5000");
})