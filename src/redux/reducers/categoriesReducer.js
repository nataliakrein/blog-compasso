import {
    GET_CATEGORIES,
} from '../types'

const INITIAL_STATE = {
    categories: [],
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}