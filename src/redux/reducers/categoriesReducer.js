import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR
} from '../types'

const INITIAL_STATE = {
    categories: [],
    error: null,
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories.categories,
            }
        case GET_CATEGORIES_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
        default:
            return state
    }
}