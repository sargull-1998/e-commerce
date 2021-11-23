import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import SigninScreen from './screens/SigninScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo } = userSignin;
   const dispatch = useDispatch();
   const signoutHandler = () => {
    dispatch(signout());
  };

  return (<BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div >
            <Link className="brand" to="/"><i>Selfless By Hyram</i></Link>
        </div>
        <div >
            <Link className="liink" to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            {
              userInfo? (
                <div className="dropdown">
                  <Link className="liink" to="#">{ userInfo.name } <i className="fa fa-caret-down"></i>{' '}</Link>
                  <ul className="dropdown-content">
                    <Link className="liink" to="#signout" onClick={signoutHandler}> Sign Out</Link>
                  </ul>
                </div>
              ):(
                <Link className="liink" to="/signin">Sign In</Link>
              )
            }
            
        </div>
    </header>
    <main>
    <Route  path="/cart/:id?" component={CartScreen} ></Route>
      <Route  path="/product/:id" component={ProductDetailScreen} ></Route>
      <Route  path="/register" component={RegisterScreen} ></Route>
      <Route  path="/signin" component={SigninScreen} ></Route>
      <Route  path="/shipping" component={ShippingScreen} ></Route>
      <Route path="/payment" component={PaymentScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route  path="/" component={HomeScreen} exact></Route>
      <Route  path="/order/:id" component={OrderDetailScreen} ></Route>

    </main>
    <footer class="row center">
        all rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
