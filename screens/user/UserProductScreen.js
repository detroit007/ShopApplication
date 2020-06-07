import React from 'react';
import { StyleSheet, Button, FlatList, Alert } from 'react-native';

import colors from '../../constants/colors';

import { useSelector, useDispatch } from 'react-redux'
import ItemCard from '../../components/ItemCard';

import * as productActions from '../../store/actions/products';

const UserProductScreen = ({navigation}) =>{

    const userProductData = useSelector(state=>state.products.userproducts);

    const dispatch = useDispatch();

    const editProducthandler = id =>{
        navigation.navigate('EditProduct',{
            id: id
        })
    }

    const deleteitemHandler =(id) =>{
        Alert.alert(
            'Are you Sure!',
            'Do you realy wwant to delete this item!',[
                {text: 'No', style: 'default'},
                {text: 'Yes', style: 'destructive', 
                onPress: ()=>{
                    dispatch(productActions.deleteProduct(id))
                }
            }
            ]
        )
    }

    return(
        <FlatList
            data={userProductData}
            renderItem={itemData=>{
                return(
                    <ItemCard
                        source={{uri: itemData.item.imgUrl}}
                        title={itemData.item.title}
                        price= {itemData.item.price}
                        onSelect={()=>{editProducthandler(itemData.item.id)}}
                    >
                    
                    <Button title='Edit' color={colors.primary}
                        onPress={()=>{editProducthandler(itemData.item.id)}}
                    />
                    <Button title='DELETE' color={colors.primary}
                        onPress={()=>{deleteitemHandler(itemData.item.id)}} 
                    />
                    </ItemCard>

                )
            }}
        />
    );
}

const styles = StyleSheet.create({

});

export default UserProductScreen;