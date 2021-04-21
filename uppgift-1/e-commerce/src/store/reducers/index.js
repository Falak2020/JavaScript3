import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import shoppingCart from './shoppingCartReducer'
export default combineReducers({

    postsReducer,
    postReducer,
    shoppingCart
})