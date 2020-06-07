import React from 'react';
import {ADD_TO_CART, DELETE_FROM_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';
import { ADD_ORDER } from '../actions/orders';
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
    items: {},
    totalAmount: 0
}

export default (state= initialState, action) =>{
    

    switch(action.type){
        case ADD_TO_CART:
            const addeditem = action.product;
            const prodTitle = addeditem.title;
            const prodPrice = addeditem.price;
            let updatedOrNewCartItem;

            if(state.items[addeditem.id]){
                // item is exisst already 
                updatedOrNewCartItem = new CartItem(
                    state.items[addeditem.id].quantity + 1,
                    prodTitle,
                    prodPrice,
                    state.items[addeditem.id].sum + prodPrice
                )
            }else{
                updatedOrNewCartItem = new CartItem(
                    1, prodTitle, prodPrice, prodPrice
                )
            }
            return {
                ...state,
                items: {...state.items, [addeditem.id]: updatedOrNewCartItem},
                totalAmount: state.totalAmount + prodPrice
            }

        case DELETE_FROM_CART:
            const selectedQuantity = state.items[action.pid].quantity;
            const selecteditem = state.items[action.pid];
            let updatedCartItems;
            if(selectedQuantity > 1){
                // we don't erase it
                const updatedCartItem = new CartItem(selecteditem.quantity - 1,
                    selecteditem.prodTitle, selecteditem.prodPrice, selecteditem.sum - selecteditem.prodPrice
                    );
                    updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
            }else{
                updatedCartItems = {...state.items}
                delete updatedCartItems[action.pid];
            }

            return {
                ...state,
                items :  updatedCartItems,
                totalAmount: state.totalAmount - selecteditem.prodPrice
            }

        case ADD_ORDER:
            return initialState;
        case DELETE_PRODUCT:
            if(!state.items[action.pid]){
                return state;
            }
            const updatedItem = {...state.items}
            const itemTotal = state.items[action.pid].sum
            delete updatedItem[action.pid]

            return {
                ...state,
                items: updatedItem,
                totalAmount:  state.totalAmount - itemTotal
            }

    }
    return state;
}

