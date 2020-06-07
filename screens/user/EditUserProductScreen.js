import React, { useCallback, useEffect , useReducer} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Alert} from 'react-native';

import * as productsAction from '../../store/actions/products';

import { useSelector, useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action)=>{
    if(action.type === FORM_INPUT_UPDATE){
        let updatedIsvalid = true;
        const updatedValues = {...state.initialValues,
            [action.input] : action.value
        }
        const updatedCheckValues = {
            ...state.valuesCheck,
            [action.input] : action.isVaid
        }
            for(const key in updatedCheckValues){
                updatedIsvalid = updatedIsvalid && updatedCheckValues[key]
            }
        return {
            formIsValid : updatedIsvalid,
            valuesCheck : updatedCheckValues,
            initialValues : updatedValues,
        }
    }
    return state;
}

const EditUserProductScreen = ({route, navigation}) =>{

    const {id} = route.params;

    let one, two, three, four;

    const editedProduct = useSelector(state=> state.products.userproducts.find(prod=> prod.id ===  id));
    
    const dispatch = useDispatch();

    const [formState, formDispatch] = useReducer(formReducer, {
        initialValues: {
            title : editedProduct ? editedProduct.title : '',
            imgUrl : editedProduct ? editedProduct.imgUrl : '',
            description : editedProduct ? editedProduct.description : '',
            price : editedProduct ? editedProduct.price : '',
        },
        valuesCheck: {
            title : editedProduct ? true : false,
            imgUrl : editedProduct ? true : false,
            description : editedProduct ? true : false,
            price : editedProduct ? true : false,
        },
        formIsValid: editedProduct ? true : false 
    })

    const onSaveProductHandler = useCallback(()=>{
        if(!formState.formIsValid){
            Alert.alert(
                'Alert!',
                'Enter Details first',[
                    {text: 'Okay'}

                ]
                
            )
            return;
        }
        if(editedProduct){
            dispatch(productsAction.updateProduct(id, 
                formState.initialValues.title, 
                formState.initialValues.imgUrl, 
                formState.initialValues.description))
        } else{
            dispatch(productsAction.addProduct(formState.initialValues.title, 
                formState.initialValues.imgUrl, 
                formState.initialValues.description, 
                +formState.initialValues.price))
        }
        navigation.goBack();
    },[id, formState])

    useEffect(()=>{
        navigation.setParams({isSave: onSaveProductHandler});
    },[onSaveProductHandler]);

    const textChangeHandler = (inputKey, text) =>{
        let isVaid = false;
        if(text.trim().length > 0){
            isVaid = true
        }
        
        formDispatch({type: FORM_INPUT_UPDATE,
             value: text, 
             isVaid: isVaid,
             input: inputKey
            })
    }

    return(
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput 
                        ref= {refs=> {one = refs}}
                        style={styles.input} 
                        onChangeText={textChangeHandler.bind(this, 'title')} 
                        value={formState.initialValues.title}
                        keyboardType='default'
                        onSubmitEditing={()=> two.focus()}

                    />
                </View>
                {!formState.valuesCheck.title && <Text>Enter title first</Text>}
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput 
                        ref= {refs => {two = refs}}
                        style={styles.input} 
                        onChangeText={textChangeHandler.bind(this, 'imgUrl')} 
                        keyboardType='url'
                        value={formState.initialValues.imgUrl}
                        onSubmitEditing={()=> three.focus()}
                    />
                </View>
                {editedProduct ? null : <View style={styles.infoBox}>
                    <Text style={styles.label}>Price</Text>
                    <TextInput 
                        ref= {refs=> {three = refs}}
                        style={styles.input} 
                        onChangeText={textChangeHandler.bind(this, 'price')} 
                        keyboardType='decimal-pad'
                        value={formState.initialValues.price}
                        onSubmitEditing={()=> four.focus()}
                    />
                </View>}
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput 
                        ref= {refs=> {four = refs}}
                        style={styles.input} 
                        keyboardType='default'
                        onChangeText={textChangeHandler.bind(this, 'description')} 
                        value={formState.initialValues.description}
                    />
                </View>
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form :{
        margin: 20
    },
    infoBox :{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
    },
    label :{
        fontSize: 18,
        fontWeight: 'bold',
    },
    input :{
        paddingHorizontal: 2,
        paddingVertical: 5,
        
    }
});

export default EditUserProductScreen;