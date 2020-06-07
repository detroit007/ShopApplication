import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import { useSelector } from 'react-redux';

import OrderItem from '../../components/Orderitem';

const OrderScreen = () =>{

    const OrderItemData = useSelector(state=>state.order.orders);

    return(
        <View style={styles.screen}>
          { OrderItemData.length === 0 ?
            <View style={styles.noItem}><Text style={{color: '#888'}}>No Orders Yet...</Text></View> :
            <FlatList
                data={OrderItemData}
                renderItem={itemData=>  {
                    return(
                        <OrderItem
                            amount={itemData.item.totalAmount}
                            date={itemData.item.date.toDateString()}
                            items={itemData.item.item}
                        />
                    )
                }}
            />
          }   
        </View>
    )
}

const styles = StyleSheet.create({
    screen :{
        flex: 1
    },
    noItem: {
        alignItems: 'center',
        paddingTop: 20,
    }
});

export default OrderScreen;