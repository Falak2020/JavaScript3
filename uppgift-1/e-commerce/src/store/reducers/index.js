import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import shoppingCart from './shoppingCartReducer'
import loginReducer from './loginReducer'
export default combineReducers({

    postsReducer,
    postReducer,
    shoppingCart,
    loginReducer
})