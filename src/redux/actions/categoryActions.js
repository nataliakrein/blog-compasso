import { 
    GET_CATEGORIES,
} from '../types'

import {
    getCategoriesAPI,
} from '../../service'


export const getCategories = () => {
    return dispatch => {
        getCategoriesAPI()
        .then(response => dispatch({type: GET_CATEGORIES, response}))
    }
}