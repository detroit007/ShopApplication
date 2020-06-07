import React from 'react';
import{ StyleSheet, View, Button, FlatList, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import ItemCard from '../../components/ItemCard';

import * as cartActions from  '../../store/actions/cart';
import colors from '../../constants/colors';

const ProductOverviewScreen = ({navigation}) =>{

    const products = useSelector(state => state.products.allProducts);
    const dispatch = useDispatch();


    const selectItemHandler = (id, title)=>{
        navigation.navigate('ProductDetail', {
        id: id,
        productTitle: title
    })
}

    const renderData = (itemData) =>{
        return(
            <ItemCard
                source={{uri: itemData.item.imgUrl}}
                description={itemData.item.title}
                price={itemData.item.price}
                onSelect={()=>{selectItemHandler(itemData.item.id, itemData.item.title)}}
            >

            <Button title='View Detail' color={colors.primary}
                onPress={()=>
                    selectItemHandler(itemData.item.id, itemData.item.title)
                } 
            />

            <Button  title='To Cart' color={colors.primary}
                onPress={()=>{
                    dispatch(cartActions.addToCart(itemData.item))
                }}
            />

            </ItemCard>
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList
                data={products}
                renderItem={renderData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
    }
});

export default ProductOverviewScreen;