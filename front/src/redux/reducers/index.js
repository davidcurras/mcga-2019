import { combineReducers } from 'redux'
import products from './products'
import orders from './orders'
import profile from './profile'

export default combineReducers({
    products,
    orders,
    profile
})