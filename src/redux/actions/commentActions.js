import { 
    GET_COMMENTS,
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT
} from '../types'

import {   
    getCommentsAPI,
    addCommentAPI,
    getCommentAPI,
    voteCommentAPI,
    updateCommentAPI,
    deleteCommentAPI
} from '../../service'

export const getAllComments = (id) => {
    return dispatch => {
        getCommentsAPI(id)
        .then(response => dispatch({type: GET_COMMENTS, response}))
    }
}

export const addComment = (body) => {
    return dispatch => {
        addCommentAPI(body)
        .then(response => dispatch({type: ADD_COMMENT, response}))
    }
}

export const getComment = (id) => {
    return dispatch => {
        getCommentAPI(id)
        .then(response => dispatch({type: UPDATE_COMMENT, response}))
    }
}

export const voteComment = (id, option) => {
    return dispatch => {
        voteCommentAPI(id, option)
        .then(response => dispatch({type: UPDATE_COMMENT, response}))
    }
}

export const updateComment = (id, body) => {
    return dispatch => {
        updateCommentAPI(id, body)
        .then(response => dispatch({type: UPDATE_COMMENT, response}))
    }
}

export const deleteComment = (id) => {
    return dispatch => {
        deleteCommentAPI(id)
        .then(response => dispatch({type: DELETE_COMMENT, response}))
    }
}