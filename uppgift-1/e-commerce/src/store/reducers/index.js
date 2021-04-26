import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import shoppingCart from './shoppingCartReducer'
import userReducer from './userReducer'
export default combineReducers({

    postsReducer,
    postReducer,
    shoppingCart,
    userReducer
})