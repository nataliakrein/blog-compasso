import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, createPost } from '../../actions'
import { useHistory, Link } from 'react-router-dom'
import { generateId } from '../../utils'
import './style.css';
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';

export const PostForm = (props) =>{
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
            category: e.target.category.value,
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
                    category.name
                ))}
                //options={['react', 'redux', 'compasso']} 
                /*options={categories.map((category, index) => (
                    <option key={index} value={category.name}>{category.name}</option>
                ))}*/
                />
            </FormField>
            <Box className="button-submit" cldirection="row" gap="medium">
                <ButtonSubmit/>
            </Box>
        </Form>
      </div>
  )
}