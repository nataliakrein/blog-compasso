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
         .then(posts => dispatch({type:GET_POSTS, posts}))
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
       .then(post => dispatch({type: UPDATE_POST, post}))       
    }
}

export const deletePost = (id) => {
    return dispatch => {
        deletePostAPI(id)
        .then(post => dispatch({type:DELETE_POST, post}))
    }
}

export const createPost = (body) => {
    return dispatch => {
        createPostAPI(body)
        .then(post => dispatch({type: CREATE_POST, post}))
    }
}

export const editPost = (id, body) => {
    return dispatch => {
        editPostAPI(id, body)
        .then(post => dispatch({type: UPDATE_POST, post}))
    }
}