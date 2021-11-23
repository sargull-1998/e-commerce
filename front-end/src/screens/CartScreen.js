import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
    ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(()=>{
    if(productId){
        dispatch(addToCart(productId, qty))
    }
    },[dispatch, productId, qty]);
    const removeFromCartHandler = (id) =>{
      dispatch(removeFromCart(id));
    }
    const checkoutHandler = () =>{
      props.history.push('/signin?redirect=shipping');
    }
  return (
   <div className="row top">
     <div className="col-2">
       <h2> shopping cart</h2>
       {cartItems.length === 0? <MessageBox> cart is empty. <Link to="/">go shopping</Link></MessageBox>: 
       (
         <ul>
           {cartItems.map((item) => (
             <li key="item.product">
                <div className="row">
                  <div>
                  <img className="small" src={item.image} alt={item.name}></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select value={item.qty}
                    onChange={(e) => 
                    dispatch(addToCart(item.product,Number(e.target.value))
                    )
           
                    }>
                         {
                                [...Array(item.countInStock).keys()].map((x) =>(
                                  <option key={x + 1} value={x + 1}>{x + 1}</option>
                                ))
                              }
                    </select>
                  </div>
                  <div>
                    ${item.price}
                  </div>
                  <div>
                    <button type="button" onClick={() =>
                      removeFromCartHandler(item.product)
                    }> Delete</button>
                  </div>
                </div>
             </li>
       ))}
         </ul>
       )}
     </div>
     <div className="col-1">
       <div className="card card-body">
         <ul>
           <li>
             <h2>
               subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items) : ${cartItems.reduce((a,c) =>
                a + c.price * c.qty,0
               )}
             </h2>
           </li>
           <li>
             <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
               proceed to checkout
             </button>
           </li>
         </ul>
       </div>
     </div>
   </div>
  );
}

