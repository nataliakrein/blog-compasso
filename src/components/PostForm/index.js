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
    const dispatch = useDispatch();
    const { category, id} = useParams()
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [props])

  return (
       <div className="post-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{id ? 'Edit Post' : 'New Post'}</Heading>
        <Form className="post-form" key={props.post.id} onSubmit={id ? props.handleOnSubmit : props.handleOnSubmit}> 
            <FormField htmlFor="title" label="Title">
                <TextInput type="text" id="title" required name="title" 
                defaultValue={props.post.title}
                />
            </FormField>
            <FormField htmlFor="body" label="Body">
                <TextArea resize="vertical" type="text" id="body" required name="body" 
                defaultValue={props.post.body}
                />
            </FormField>
            <FormField htmlFor="author" label="Author">
                <TextInput type="text" required id="author" name="author" 
                disabled={id ? true : false}
                defaultValue={props.post.author}
                />
            </FormField>
            <FormField htmlFor="category" label="Category">
                <Select 
                required 
                disabled={id ? true : false}
                name="category"
                options={categories.map((category, index) => (
                    category.path
                ))}
                placeholder={props.post.category} 
                />
            </FormField>
            <Box className="button-submit" cldirection="row" gap="medium">
                <ButtonSubmit/>
            </Box>
        </Form>
      </div>
  )
}
