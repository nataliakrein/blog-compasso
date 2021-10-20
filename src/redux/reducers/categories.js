import {
    GET_CATEGORIES,
} from '../types'

export const categories = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.response.categories
        default:
            return state
    }
}