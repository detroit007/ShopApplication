import  React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const CartItem = (props) => {
    return(
        <View style={styles.cartItem} >
            <View style={styles.itemDetail}>
                    <Text style={styles.quantity}>{props.quantity}</Text>
                    <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.itemDetail}>
                <Text style={styles.amount}>{props.amount.toFixed(2)}</Text>
                {
                props.showable && <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={props.onRemove}>
                    <Icon name='trash-alt' size={20} color='red' />
                </TouchableOpacity>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartItem :{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    itemDetail :{
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity :{
        color: '#888',
        fontSize: 18,
        paddingRight: 10
    },
    title: {
        fontSize: 18,
    },
    amount :{
        fontSize: 18,
        fontWeight: 'bold',
    },
    btn :{
        marginLeft: 20
    }

});

export default CartItem;