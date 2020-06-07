import React from 'react';
import { StyleSheet, 
         View, 
         Text, 
         Image, 
         TouchableOpacity,
         TouchableNativeFeedback,
         Button,
         } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import colors from '../../constants/colors';

import * as cartActions from  '../../store/actions/cart';


const ProductDetailScreen = ({route, navigation}) =>{

    const {id} = route.params;

    const selectedProduct = useSelector(state=> state.products.allProducts.find(product=> product.id === id))

    const dispatch = useDispatch();

    return (
        <View style={styes.screen} >

            <Image style={styes.image} source={{uri: selectedProduct.imgUrl}} />
            <View style={styes.btn}>
                <Button 
                    title='To cart' 
                    color={colors.primary}
                    onPress={()=>{dispatch(cartActions.addToCart(selectedProduct))
                    }}
                />
            </View>
            <View style={styes.detail} >
                <Text style={{color: '#888'}} >{selectedProduct.price.toFixed(2)} Rs.</Text>
                <Text>{selectedProduct.description}</Text>
            </View>

        </View>
    );
}

const styes = StyleSheet.create({
screen :{
    flex: 1,
    alignItems: 'center',
},
image: {
    width: '100%',
    height: 400,
},
detail:{
    paddingTop: 10,
    alignItems: 'center'
},
btn :{
    marginTop: 10
}

});

export default ProductDetailScreen;