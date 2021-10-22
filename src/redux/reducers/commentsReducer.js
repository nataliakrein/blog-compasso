import { GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, GET_COMMENTS_ERROR, ADD_COMMENT_ERROR, GET_COMMENT_ERROR } from '../types';

const INITIAL_STATE = {
    comments: [],
    comment: {},
    loading: true,
    error: null,
}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                loading: false,
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                loading: false,
                comments: [...state.comments, action.comment]
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                loading: false,
                comments: [...state.comments.map(comment => comment.id === action.comment.id ? action.comment : comment)]
                }
        case DELETE_COMMENT:
            return {
                ...state,
                loading: false,
                comments: state.comments.filter(comment => action.comment.id !== comment.id) 
            }
        case GET_COMMENTS_ERROR:
        case ADD_COMMENT_ERROR:
        case GET_COMMENT_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
        default:
            return state
    }
}