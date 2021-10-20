import { 
    GET_POSTS,
    SORT_BY_VOTES,
    SORT_BY_TIME,
    DELETE_POST,
    UPDATE_POST,
    CREATE_POST,    
} from '../types'

import {
    getAllPostsAPI,
    votePostAPI,
    deletePostAPI,
    createPostAPI,    
    editPostAPI,    
} from '../../service'



export const getAllPosts = (category = undefined) => {
     return dispatch => {
         getAllPostsAPI(category)
         .then(response => dispatch({type:GET_POSTS,response}))
     }
}

export const sortByVotes = (posts) => {
    return {
        type:SORT_BY_VOTES,
        posts,
    }
}

export const sortByTime = (posts) => {
    return {
        type:SORT_BY_TIME,
        posts,
    }
}

export const votePost = (id,option) => {
    return dispatch => {
       votePostAPI(id,option)
       .then(response => dispatch({type: UPDATE_POST,response}))       
    }
}

export const deletePost = (id) => {
    return dispatch => {
        deletePostAPI(id)
        .then(response => dispatch({type:DELETE_POST,response}))
    }
}

export const createPost = (body) => {
    return dispatch => {
        createPostAPI(body)
        .then(response => dispatch({type: CREATE_POST, response}))
    }
}

export const editPost = (id, body) => {
    return dispatch => {
        editPostAPI(id, body)
        .then(response => dispatch({type: UPDATE_POST, response}))
    }
}