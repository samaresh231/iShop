import React from 'react';
import { Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const MainPage = () => {
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hi');
        axios.post("http://localhost:5000/cart/new", {
            wrafer: "plain",
            flavour: "chocolate",
            toppings: ["chocolate chips"],
            nOrders: 2
        })
        history.push("/cart");
    }

    // const handleChange = (e) => {
    //     console.log("hi");
    // }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Wrafers</legend>
                    <input type="radio" id="plain" name="wrafer" value="plain" />{"  "}
                    <label htmlFor="plain">Plain</label><br />
                    <input type="radio" id="chocolate" name="wrafer" value="chocolate" />{"  "}
                    <label htmlFor="chocolate">Chocolate</label><br />
                    <input type="radio" id="waffle" name="wrafer" value="waffle" />{"  "}
                    <label htmlFor="waffle">Waffle</label>
                </fieldset>
                <fieldset>
                    <legend>Flavour</legend>
                    <input type="radio" id="vanilla" name="flavour" value="vanilla" />{"  "}
                    <label htmlFor="vanilla">Vanilla</label><br />
                    <input type="radio" id="chocolate" name="flavour" value="chocolate" />{"  "}
                    <label htmlFor="chocolate">Chocolate</label><br />
                    <input type="radio" id="mango" name="flavour" value="mango" />{"  "}
                    <label htmlFor="mango">Mango</label><br />
                    <input type="radio" id="strawberry" name="flavour" value="strawberry" />{"  "}
                    <label htmlFor="strawberry">Strawberry</label><br />
                    <input type="radio" id="coconut" name="flavour" value="coconut" />{"  "}
                    <label htmlFor="coconut">Coconut</label><br />
                </fieldset>
                <fieldset>
                    <legend>Toppings</legend>
                    <input type="checkbox" id="tuttiFruti" name="tuttiFruti" value="tutti fruti" />{"  "}
                    <label htmlFor="tuttiFruti"> Tutti Fruti </label><br />
                    <input type="checkbox" id="chocolateChips" name="chocolateChips" value="chocolate chips" />{"  "}
                    <label htmlFor="chocolateChips"> Chocolate Chips </label><br />
                    <input type="checkbox" id="roastedAlmonds" name="roastedAlmonds" value="roasted almonds" />{"  "}
                    <label htmlFor="roastedAlmonds"> Roasted Almonds </label>
                </fieldset>
                <Button type="submit">Add to Cart</Button>
            </form>
        </div>
    );
}

export default MainPage;