import { ADD_PRODUCT, LOAD_PRODUCTS, SET_PRODUCT_ERROR, SET_PRODUCT_LOADING } from '../actions/products'

const initialState = {
    isLoading: false,
    error: '',
    list: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                list: action.payload,
                error: null,
                isLoading: false
            }
        case SET_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case SET_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ADD_PRODUCT:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default reducer