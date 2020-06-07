import React, { useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import CartItem from './Cartitem'
import colors from '../constants/colors';


const OrderItem = (props) =>{

    const [showDetails, setShowDetails] = useState(false);

    return(
        <View style={styles.item}>
            <View style={styles.detail}>
                <Text style={styles.amount}>{props.amount.toFixed(2)} Rs.</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
                
            <Button 
                color={colors.primary}
                title={showDetails ? 'Hide Details' : 'View Details'} 
                onPress={()=>{
                    setShowDetails(prevState=> !prevState);
                }} 
            />
            </View>

            {showDetails && <View style={styles.showItem}>
                    {props.items.map(orderItem=>(
                            <CartItem
                                key={orderItem.updatedid}
                                quantity={orderItem.quantity}
                                title={orderItem.prodTitle}
                                amount={orderItem.sum}
                            />
                        )
                    )}
                </View>}

        </View>
    )
}

const styles = StyleSheet.create({
    item :{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        borderRadius: 10,
        elevation: 5,
        padding: 15,
        margin: 10,
    },
    detail :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    amount: {
        fontSize: 18,
    },
    showItem :{
        width: '100%',
    }

});

export default OrderItem;