import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import colors from '../../constants/colors';
import CartItem from '../../components/Cartitem';

import * as cartActions from '../../store/actions/cart';
import * as ordersAction from '../../store/actions/orders';

const CartScreen =() =>{

    const cartTotalAmount = useSelector(state=> state.cart.totalAmount);
    const dispatch = useDispatch();

    const cartItemsData = useSelector(state=> {
        const updatedCartitems = [];
        for(const key in state.cart.items){
            updatedCartitems.push({
                updatedid: key,
                prodTitle: state.cart.items[key].prodTitle,
                prodPrice: state.cart.items[key].prodPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            });
        }
        return updatedCartitems.sort((a, b)=> {a.updatedid > b.updatedid ? 1 : -1});
    });
    
    return(
        <View style={styles.screen}>
            <View style={styles.cartItem}>
                <Text><Text style={{fontSize: 18, fontWeight: 'bold'}}>{cartTotalAmount.toFixed(2)}</Text> Rs.  Total Amount</Text>
                <Button title='Order Now' 
                    color={colors.accent}
                    disabled={cartItemsData.length === 0}

                    onPress={()=>{
                        dispatch(ordersAction.addOrder(cartItemsData, cartTotalAmount))
                    }}
                />
            </View>
                <FlatList
                    data={cartItemsData}
                    keyExtractor={item=> item.updatedid }
                    renderItem={itemData=>{
                        return(
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.prodTitle}
                            amount={itemData.item.sum}
                            showable
                            onRemove={()=>{
                                dispatch(cartActions.deleteFromCart(itemData.item.updatedid))
                            }}
                        />
                        )
                    }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
screen :{
    flex: 1,
},
cartItem :{
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    margin: 10,
}
});

export default CartScreen;