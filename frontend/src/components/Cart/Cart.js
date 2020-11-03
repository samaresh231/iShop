import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import SingleOrder from './SingleOrder';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const Cart = () => {
    const [pendingOrderList, setPendingOrderList] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("http://localhost:5000/cart");
            setPendingOrderList(response.data);
            console.log(response.data);
        }
        fetchData();
    }, []);

    return(
        <div>
            <h1 className="mt-3">Orders</h1>
            {
                pendingOrderList.map((order) => <SingleOrder wrafer={order.wrafer} flavour={order.flavour} toppings={order.toppings} key={uuidv4()} id={order._id} />)
            }
            <NavLink exact to="/checkout">
                <Button className="m-1">Proceed to Checkout</Button>
            </NavLink>
            <NavLink exact to="/"> 
                <Button className="m-1">back to the Shop</Button>
            </NavLink>
        </div>
    );
}

export default Cart;