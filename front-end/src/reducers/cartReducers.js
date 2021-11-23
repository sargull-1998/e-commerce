import { ADD_TO_CART_ITEM, CART_EMPTY, CART_REMOVE_ITEM, SAVE_PAYMENT_METHOD, SAVE_SHIPPING_CART_ADDRESS } from "../constants/cartConstant";

export const cartReducer = (state = {cartItems: []},action) =>{
    switch(action.type){
        case ADD_TO_CART_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find(x => x.product === item.product);
        if(existItem){
            return {...state,
                cartItems:state.cartItems.map( x => x.product === existItem.product?
                    item: x
                )
            };
        }else{
            return {
                ...state,
                cartItems: [...state.cartItems,item]
            };
        }
        case CART_REMOVE_ITEM:
            return{
                ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)
            };
            case SAVE_SHIPPING_CART_ADDRESS:
                return{
                ...state, shippingAddress: action.payload
                };
                case SAVE_PAYMENT_METHOD:
                    return{
                        ...state,paymentMethod: action.payload
                    };
                    case CART_EMPTY:
                        return{
                            ...state, cartItems: []
                        };
        default:
            return state;
    }
}