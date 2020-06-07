export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = ( productId ) =>{
    return{
        type: DELETE_PRODUCT,
        pid: productId
    }
}

export const addProduct = (title, imgUrl, description, price) =>{
    return{
        type: ADD_PRODUCT,
        productData: {
            title,
            imgUrl,
            description,
            price
        }
    }
};

export const updateProduct = (id, title, imgUrl, description) =>{
    return{
        type: UPDATE_PRODUCT,
        pid: id,
        productData: {
            title,
            imgUrl,
            description
        }
    }
};