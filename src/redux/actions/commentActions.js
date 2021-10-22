import { GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../types'

import {
  getCommentsAPI,
  addCommentAPI,
  getCommentAPI,
  voteCommentAPI,
  updateCommentAPI,
  deleteCommentAPI,
} from '../../service'

export const getAllComments = (id) => {
  return (dispatch) => {
    getCommentsAPI(id).then((comments) => dispatch({ type: GET_COMMENTS, comments }))
  }
}

export const addComment = (body) => {
  return (dispatch) => {
    addCommentAPI(body).then((comment) => dispatch({ type: ADD_COMMENT, comment }))
  }
}

export const getComment = (id) => {
  return (dispatch) => {
    getCommentAPI(id).then((comment) => dispatch({ type: UPDATE_COMMENT, comment }))
  }
}

export const voteComment = (id, option) => {
  return (dispatch) => {
    voteCommentAPI(id, option).then((comment) => dispatch({ type: UPDATE_COMMENT, comment }))
  }
}

export const updateComment = (id, body) => {
  return (dispatch) => {
    updateCommentAPI(id, body).then((comment) => dispatch({ type: UPDATE_COMMENT, comment }))
  }
}

export const deleteComment = (id) => {
  return (dispatch) => {
    deleteCommentAPI(id).then((comment) => dispatch({ type: DELETE_COMMENT, comment }))
  }
}
