import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';

const ShopNavigator = () =>{
    
    const Stack = createStackNavigator();

    return(
          <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: colors.primary,
                }
            }}
          >

            <Stack.Screen 
                name='ProductOverview' 
                component={ProductOverviewScreen} 
                options={({navigation}) =>({
                    title: 'All Products',
                    headerRight: () => <TouchableOpacity activeOpacity={0.6} style={{marginRight: 20}} 
                            onPress={()=>{navigation.navigate('cart')}} 
                            >
                            <Icon 
                                name='shopping-cart' size={22} 
                                color='white' 
                            />
                        </TouchableOpacity>,
                    headerLeft: ()=> <TouchableOpacity activeOpacity={0.6} style={{marginLeft: 10}} 
                    onPress={()=>{navigation.toggleDrawer()}} 
                    >
                    <Icon 
                        name='bars' size={22} 
                        color='white' 
                    />
                    </TouchableOpacity>
                    
                })}
            />

            <Stack.Screen 
                name='ProductDetail' 
                component={ProductDetailScreen} 
                options={({route})=>({
                    title: route.params.productTitle
                })}
            />

            <Stack.Screen 
                name='cart' 
                component={CartScreen} 
                options={{
                    title: 'Cart Screen'
                }}
            />

          </Stack.Navigator>
    )
}

export default ShopNavigator;