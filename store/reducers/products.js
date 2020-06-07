import React from 'react';

import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } from '../actions/products';
import Products from '../../models/products';

const initialState ={
    allProducts: PRODUCTS,
    userproducts: PRODUCTS.filter(prod=> prod.ownerId === 'u1')
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_PRODUCT:
            const newProduct = new Products(new Date().toString(), 'u1', 
            action.productData.title,
            action.productData.imgUrl,
            action.productData.description,
            action.productData.price
            )
            return {
                ...state,
                allProducts: state.allProducts.concat(newProduct),
                userproducts: state.userproducts.concat(newProduct)
            }
        case UPDATE_PRODUCT:
            const productIndex = state.userproducts.findIndex(prod=> prod.id === action.pid);
            const updatedNewProduct = new Products(action.pid, 
                state.userproducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imgUrl,
                action.productData.description,
                state.userproducts[productIndex].price
                )
            const updatedUserProducts = [...state.userproducts]
            updatedUserProducts[productIndex] = updatedNewProduct;

            const allProductIndex = state.allProducts.findIndex(prod=> prod.id === action.pid);
            const updatedAllProducts = [...state.allProducts];
            updatedAllProducts[allProductIndex] = updatedNewProduct;
            return{
                ...state,
                allProducts: updatedAllProducts,
                userproducts: updatedUserProducts,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                allProducts: state.allProducts.filter(prod=> prod.id !== action.pid),
                userproducts: state.userproducts.filter(prod=> prod.id !== action.pid)
            }
    }
    return state;
}

export default productReducer;