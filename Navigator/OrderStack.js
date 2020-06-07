import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../screens/shop/OrderScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';

const OrderStack = () =>{
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
                name='order' 
                component={OrderScreen}
                options={({navigation})=>({
                    title: 'Orders',
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
        </Stack.Navigator>
    )
}

export default OrderStack;