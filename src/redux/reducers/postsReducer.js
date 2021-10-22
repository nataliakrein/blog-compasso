import { GET_POSTS, SORT_BY_VOTES, SORT_BY_TIME, UPDATE_POST, DELETE_POST, CREATE_POST, CREATE_POST_ERROR, GET_POSTS_ERROR } from '../types'

const INITIAL_STATE = {
    posts: [],
    post: {},
    loading: true,
    error: null,
}

export const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.posts
            };
        case SORT_BY_VOTES:
            return { 
                ...state,
                loading: false,
                posts: action.posts.sort((a, b) => b.voteScore - a.voteScore)
            }
        case SORT_BY_TIME:
            return { 
                ...state,
                loading: false,
                posts: action.posts.sort((a, b) => b.timestamp - a.timestamp)
            }
        case CREATE_POST:
            return {
                ...state,
                loading: false,
                post: action.post,
            }
        case UPDATE_POST:
            return {
                ...state,
                loading: false,
                posts: [...state.posts.map(post => post.id === action.post.id ? action.post : post)]
            }
        case DELETE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post => action.post.id !== post.id) 
            }
        case GET_POSTS_ERROR:
        case CREATE_POST_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
        default:
            return state;
    }
}
