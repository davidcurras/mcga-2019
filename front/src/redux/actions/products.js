export const LOAD_PRODUCTS = 'mcga/LOAD_PRODUCTS'
export const SET_PRODUCT_ERROR = 'mcga/SET_PRODUCT_ERROR'
export const SET_PRODUCT_LOADING = 'mcga/SET_PRODUCT_LOADING'
export const ADD_PRODUCT = 'mcga/ADD_PRODUCT'

export const loadProducts = products => {
    return {
        type: LOAD_PRODUCTS,
        payload: products
    }
}

export const setProductError = err => {
    return {
        type: SET_PRODUCT_ERROR,
        payload: err
    }
}

export const setProductLoading = () => {
    return {
        type: SET_PRODUCT_LOADING
    }
}

export const addProduct = () => {
    return {
        type: ADD_PRODUCT,
        payload: {
            id: Date.now(),
            price: Math.random()*100,
            name: 'caramelos'
        }
    }
}