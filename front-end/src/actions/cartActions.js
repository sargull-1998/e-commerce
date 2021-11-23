import  Axios  from 'axios';
import { ADD_TO_CART_ITEM, CART_REMOVE_ITEM, SAVE_PAYMENT_METHOD, SAVE_SHIPPING_CART_ADDRESS } from '../constants/cartConstant';


export const addToCart = (productId, qty) => async (dispatch, getState) =>{
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: ADD_TO_CART_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => async (dispatch, getState) =>{
dispatch({
  type: CART_REMOVE_ITEM,
  payload: productId
});
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShipping = (data) => async (dispatch) =>{
  dispatch({
    type: SAVE_SHIPPING_CART_ADDRESS ,payload:data
  });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
}
export const savePayment = (data) => async (dispatch) =>{
  dispatch({
    type: SAVE_PAYMENT_METHOD, payload: data
  });
}