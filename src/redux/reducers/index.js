import { combineReducers } from 'redux'
import { categoriesReducer } from './categoriesReducer'
import { postsReducer } from './postsReducer'
import { commentsReducer } from './commentsReducer'

export default combineReducers({
    categoriesReducer,
    postsReducer,
    commentsReducer,
})

