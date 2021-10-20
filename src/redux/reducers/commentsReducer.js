import { GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../types';

const INITIAL_STATE = {
    comments: [],
    comment: {},
}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments.map(comment => comment.id === action.comment.id ? action.comment : comment)]
                }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => action.comment.id !== comment.id) //state.post
            }
        default:
            return state
    }
}