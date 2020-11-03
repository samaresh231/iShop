import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
import {Switch,Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/orders">
                    <Orders />
                </Route>
                <Route exact path="/checkout">
                    <Checkout />
                </Route>
                <Route exact path="/">
                    <MainPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
