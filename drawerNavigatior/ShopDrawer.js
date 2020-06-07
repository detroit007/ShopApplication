import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShopNavigator from '../Navigator/ShopNavigator';
import OrderScreen from '../screens/shop/OrderScreen';
import OrderStack from '../Navigator/OrderStack';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import UserProductStack from '../Navigator/UserProductStack';

const ShopDrawer = () =>{
    const Drawer = createDrawerNavigator();
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: colors.primary
                }}
            >
                <Drawer.Screen name='ShopHome' component={ShopNavigator}
                    options={{
                        drawerLabel: 'Products',
                        drawerIcon: ({color})=> <Icon name='shopping-cart' color={color} size={18}/>,
                        
                    }}
                />
                <Drawer.Screen name='Order' component={OrderStack} 
                     options={{
                        drawerLabel: 'Orders',
                        drawerIcon: ({color})=> <Icon name='list' color={color} size={18}/>,
                        
                    }}
                />

                <Drawer.Screen 
                    name='Admin' 
                    component={UserProductStack} 
                    options={{
                        drawerIcon: ({color})=> <Icon name='user' color={color} size={18}/>,
                        
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default ShopDrawer;
