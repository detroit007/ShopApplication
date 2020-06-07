export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (item, totalAmount)=>{
    return{
        type: ADD_ORDER,
        cartItem: {item: item, amount: totalAmount}
    }
}