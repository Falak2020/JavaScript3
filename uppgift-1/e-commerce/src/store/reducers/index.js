import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import productReducer from './productReducer'
import shoppingCart from './shoppingCartReducer'
import userReducer from './userReducer'
export default combineReducers({

    productsReducer,
    productReducer,
    shoppingCart,
    userReducer
})