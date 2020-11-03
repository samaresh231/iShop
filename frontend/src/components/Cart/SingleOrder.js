import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const SingleOrder = (props) => {
    const handleCancel = async () => {
        await axios.delete(`http://localhost:5000/cart/${props.id}`);
    }
    return(
        <div className="m-4">
            <Container className="border rounded">
                <Row>
                    <Col md={8}>
                        <p>wafer: {props.wrafer}</p>
                        <p>flavour: {props.flavour}</p>
                        <p>Toppings: {props.toppings.map((topping) => <li className="d-inline m-1" key={uuidv4()}>{topping}</li>)}</p>
                    </Col>
                    <Col className="mt-4">
                        {/* <Button className="m-1">-</Button>
                        <span className="m-1">{1}</span>
                        <Button className="m-1">+</Button> */}
                        <Button className="m-3" onClick={handleCancel}>Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SingleOrder;