import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

 
import productReducer from  './store/reducers/products';
import cartReducer from './store/reducers/cart';
import OrderReducer from './store/reducers/orders';

import ShopNavigator from './Navigator/ShopNavigator';
import ShopDrawer from './drawerNavigatior/ShopDrawer';
 
const App: () => React$Node = () => {

  const rootReducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    order: OrderReducer,
  })

  const store = createStore(rootReducers);

  return (

    <Provider store={store} >

      {/* <ShopNavigator/> */}
      <ShopDrawer/>

    </Provider>
    
  );
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
// });

export default App;
