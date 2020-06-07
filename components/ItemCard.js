import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Platform, TouchableNativeFeedback } from 'react-native';
import colors from '../constants/colors';

const ItemCard = (props) =>{

let TouchableCom;

    TouchableCom = Platform.OS === 'android' && Platform.Version >=21 ?
    TouchableNativeFeedback : TouchableOpacity;

    return(
        <View style={styles.screen}>
            <View style={styles.touchable}>
         <TouchableCom onPress={props.onSelect} useForeground >
          <View>
            <View style={styles.imgCont}>
                <Image source={props.source} style={styles.image} />
            </View>

            <View style={styles.details} >
                <Text style={styles.title} >{props.description}</Text>
                <Text style={styles.price} >
                    {props.price.toFixed(2)} Rs.
                </Text>
            </View>

            <View style={styles.btnCont} >
                {props.children}
            </View>
          </View>
         </TouchableCom>
         </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    screen :{
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        marginVertical: 10,
        height: 300,
        margin: 20
    },
    touchable :{
        borderRadius: 10,
        overflow: 'hidden',
    },
    imgCont :{
        width:'100%',
        height: '60%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    },
    image :{
        width: '100%',
        height: '100%',
    },
    details :{
        alignItems: 'center',
        padding: 10
    },
    title :{
        fontSize: 18,
        marginVertical: 4
    },
    price :{
        color: '#888'
    },
    btnCont :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    btn:{
        backgroundColor: colors.primary,
        padding: 7,
        borderRadius: 5,
    }
});

export default ItemCard;