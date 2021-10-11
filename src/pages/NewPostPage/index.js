import React, {useEffect, useState} from 'react';
//import './style.css';
import { ButtonSubmit, PostForm } from '../../components';
import { getCategories, createPost, editPost, getAllPosts } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';
import { useParams } from 'react-router-dom'
import { useHistory, Link } from 'react-router-dom'
import { generateId } from '../../utils'

export const NewPostPage = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch()
    const [post, setPost] = useState({
        id: '',
        timestamp: '',
        title: '',
        body: '',
        author: '',
        category: '',
    })

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const handleOnSubmit = async (e) => {
        e.preventDefault();    
            const id = generateId()
            const timestamp = Date.now()
            await dispatch(createPost({
                id,
                timestamp,
                title: e.target.title.value,
                body: e.target.body.value,
                author: e.target.author.value,
                category: e.target.category.value
        }))
        history.push('/')
      };

  return (
    <div className="post-form-div_edit">
        <PostForm post={post} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}
