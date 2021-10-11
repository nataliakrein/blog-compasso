import React, {useEffect, useState} from 'react';
import './style.css';
import { ButtonSubmit, PostForm } from '../../components';
import { getAllPosts, getCategories, editPost } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';
import { useParams } from 'react-router-dom'
import { useHistory, Link } from 'react-router-dom'

export const PostEditPage = (props) =>{
    const history = useHistory();
    const { category, id} = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const [post, setPost] = useState({})

    useEffect(() => {
        dispatch(getCategories())
        setPost(posts.find(post => post.id === props.match.params.id))
    }, [category])

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await dispatch(editPost(id, {
            title: e.target.title.value,
            body: e.target.body.value,
        }))
        history.push('/')
    }

  return (
    <div className="post-form-div_edit">
        <PostForm post={post} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}
