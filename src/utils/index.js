const auth = 'd25o04m'

const url = 'http://localhost:3001'

const getHeaders = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "Authorization": auth
    }
}

const postHeaders = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Authorization": auth
    }
}

const putHeaders = {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json",
        "Authorization": auth
    }
}

const deleteHeaders = {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json",
        "Authorization": auth
    }
}

export const getCategoriesAPI = () => {
    return fetch(`${url}/categories`, getHeaders)
        .then(response => response.json())
}

export const getAllPostsAPI = (category = undefined) => {
    if (category !== undefined) {
        return fetch(`${url}/${category}/posts`, getHeaders)
            .then(response => response.json())
    }
    return fetch(`${url}/posts`, getHeaders)
        .then(response => response.json())
}

export const createPostAPI = (body) => {
    postHeaders.body = JSON.stringify(body)
    return fetch(`${url}/posts`, postHeaders)
        .then(response => response.json())
}

export const votePostAPI = (id, option) => {
    postHeaders.body = JSON.stringify({ option })
    return fetch(`${url}/posts/${id}`, postHeaders)
        .then(response => response.json())
}

export const editPostAPI = (id, body) => {
    putHeaders.body = JSON.stringify(body)
    return fetch(`${url}/posts/${id}`, putHeaders)
        .then(response => response.json())
}

export const deletePostAPI = (id) => {
    return fetch(`${url}/posts/${id}`, deleteHeaders)
        .then(response => response.json())
}

export const generateId = () => {
    let id = (Math.random() + 1).toString(36).substring(2)
    return id
}

export const getCommentsAPI = (id) => {
    return fetch(`${url}/posts/${id}/comments`, getHeaders)
        .then(response => response.json())
}

export const addCommentAPI = (body) => {
    postHeaders.body = JSON.stringify(body)
    return fetch(`${url}/comments`, postHeaders)
        .then(response => response.json())
}

export const getCommentAPI = (id) => {
    return fetch(`${url}/comments/${id}`, getHeaders)
        .then(response => response.json())
}

export const voteCommentAPI = (id, option) => {
    postHeaders.body = JSON.stringify({ option })
    return fetch(`${url}/comments/${id}`, postHeaders)
        .then(response => response.json())
}

export const updateCommentAPI = (id, body) => {
    putHeaders.body = JSON.stringify(body)
    return fetch(`${url}/comments/${id}`, putHeaders)
        .then(response => response.json())
}

export const deleteCommentAPI = (id) => {
    return fetch(`${url}/comments/${id}`, deleteHeaders)
        .then(response => response.json())
}