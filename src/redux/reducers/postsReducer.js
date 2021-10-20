import { GET_POSTS, SORT_BY_VOTES, SORT_BY_TIME, UPDATE_POST, DELETE_POST, CREATE_POST } from '../types'

const INITIAL_STATE = {
    posts: [],
    post: {},
}

export const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case SORT_BY_VOTES:
            return { 
                ...state,
                posts: action.posts.sort((a, b) => b.voteScore - a.voteScore)
            }
        case SORT_BY_TIME:
            return { 
                ...state,
                posts: action.posts.sort((a, b) => b.timestamp - a.timestamp)
            }
        case CREATE_POST:
            return {
                ...state,
                post: action.post,
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: [...state.posts.map(post => post.id === action.post.id ? action.post : post)]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => action.post.id !== post.id) //state.post
            }
        default:
            return state;
    }
}
