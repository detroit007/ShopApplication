import { ADD_ORDER } from "../actions/orders"
import Order from "../../models/order"

const initialState = {
    orders: []
}

export default (state= initialState, action)=>{
    switch(action.type){
        case ADD_ORDER:
            const cartItem = new Order( new Date().toString(), 
            action.cartItem.item,
            action.cartItem.amount,
            new Date()
            );

    return {
        ...state,
        orders: state.orders.concat(cartItem)
    }
    }
    return state;
}