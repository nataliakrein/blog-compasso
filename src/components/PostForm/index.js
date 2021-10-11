import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, createPost, editPost, getAllPosts } from '../../actions'
import { useHistory, Link } from 'react-router-dom'
import { generateId } from '../../utils'
import './style.css';
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const PostForm = (props) =>{
    const posts = useSelector(state => state.posts)
    const history = useHistory();
    const dispatch = useDispatch();
    const { category, id} = useParams()
    const categories = useSelector(state => state.categories)
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
        if(props?.match?.params?.id){
            const editPost = posts.find(post => post.id === props.match.params.id)
            return setPost(editPost)
        }
    }, [category]) 

    const sendPost = async e => {
        e.preventDefault()
        try {
            if(id){
                await dispatch(editPost(id, {
                    title: e.target.title.value,
                    body: e.target.body.value,
                }))
            }
            else{
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
        } 
            history.push('/')
        } catch (error) {
            console.log(error)
            alert("Erro ao criar post.")
        }
    }

    const title = id ? 'Edit Post' : 'New Post';
        
  return (
       <div className="post-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{title}</Heading>
        <Form className="post-form" onSubmit={sendPost}> 
            <FormField htmlFor="title" label="Title">
                <TextInput type="text" id="title" required name="title" 
                value={post.title}
                onChange={e => setPost({ title: e.target.value })}/>
            </FormField>
            <FormField htmlFor="body" label="Body">
                <TextArea type="text" id="body" required name="body" 
                value={post.body}
                onChange={e => setPost({ body: e.target.value })}/>
            </FormField>
            <FormField htmlFor="author" label="Author">
                <TextInput type="text" required id="author" name="author" 
                disabled={id ? true : false}
                value={post.author}
                onChange={e => setPost({ author: e.target.value })} />
            </FormField>
            <FormField htmlFor="category" label="Category">
                <Select 
                required 
                disabled={id ? true : false}
                name="category"
                options={categories.map((category, index) => (
                    category.path
                ))}
                value={post.category} 
                onChange={e => setPost({ category: e.target.value })}
                />
            </FormField>
            <Box className="button-submit" cldirection="row" gap="medium">
                <ButtonSubmit/>
            </Box>
        </Form>
      </div>
  )
}

/*export const PostForm = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const addPost = async e => {
        e.preventDefault()
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
        //props.history.replace('/')
        history.push('/')
    }
        
  return (
       <div className="post-form-div">
        <Heading size="small" color="var(--title-post)" level="3">New Post</Heading>
        <Form className="post-form" onSubmit={addPost}>
            <FormField htmlFor="title" label="Title">
                <TextInput type="text" id="title" required name="title"/>
            </FormField>
            <FormField htmlFor="body" label="Body">
                <TextArea type="text" id="body" required name="body"/>
            </FormField>
            <FormField htmlFor="author" label="Author">
                <TextInput type="text" required id="author" name="author" />
            </FormField>
            <FormField htmlFor="category" label="Category">
                <Select 
                required 
                name="category"
                options={categories.map((category, index) => (
                    category.path
                ))}
                />
            </FormField>
            <Box className="button-submit" cldirection="row" gap="medium">
                <ButtonSubmit/>
            </Box>
        </Form>
      </div>
  )
}*/