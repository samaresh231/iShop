import React, {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';
import axios from 'axios';

const Checkout = () => {
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/order/new", {phone: phone, address: address});
        alert("You have successfully placed your order");
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            <Form style={{width: "40vw"}} className="pt-5" onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Phone no:</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" onChange={(e) => setPhone(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Place Order
                </Button>
            </Form>
        </div>
    );
}

export default Checkout;