import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import UserProductScreen from '../screens/user/UserProductScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import EditUserProductScreen from '../screens/user/EditUserProductScreen';


const UserProductStack = () =>{

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: colors.primary
                }
            }}
        >
            <Stack.Screen 
                name='userProduct' 
                component={UserProductScreen} 
                options={({navigation}) =>({
                    title: 'Your Products',
                    headerLeft: () => <TouchableOpacity activeOpacity={0.6} style={{marginLeft: 10}} 
                            onPress={()=>{navigation.toggleDrawer()}} 
                            >
                            <Icon 
                                name='bars' size={22} 
                                color='white' 
                            />
                        </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity activeOpacity={0.6} style={{marginRight: 20}} 
                        onPress={()=>{navigation.navigate('EditProduct', {
                            id: ''
                        })}} 
                    >
                    <Icon 
                        name='edit' size={22} 
                        color='white' 
                    />
                        </TouchableOpacity>,
                })}
            />
            <Stack.Screen 
                name='EditProduct' 
                component={EditUserProductScreen} 
                options={({route})=>({
                    title: route.params.id !== '' ? 'Edit Product' : 'Add Product',
                    headerRight: () => <TouchableOpacity activeOpacity={0.6} style={{marginRight: 20}} 
                        onPress={()=>{route.params.isSave()}}
                    >
                    <Icon 
                        name='save' size={22} 
                        color='white' 
                    />
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

export default UserProductStack;