import {applyMiddleware, createStore,compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailReducer, orderPayReducer } from './reducers/orderReducers';
import { productDetailReducer, productListReducer } from './reducers/productReducers';
import { userRegisterReducer, usersigninReducer } from './reducers/userReducers';


const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
        shippingAddress: localStorage.getItem('shippingAddress')? JSON.parse(localStorage.getItem('shippingAddress')): {},
        paymentMethod: 'PayPal',
    },
    userSignin:{
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')):null,
    }

};
const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userSignin: usersigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
    orderPay: orderPayReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;