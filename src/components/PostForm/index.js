import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../actions'
import './style.css';
import { Form, TextInput, Heading, FormField, Select, TextArea, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useParams } from 'react-router-dom'

export const PostForm = (props) =>{
    const dispatch = useDispatch();
    const {id} = useParams()
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [props, dispatch])


    const validateTitle = (title) => {
        const validate = (title !== undefined ? title.length : props.post.title.length)
        if (validate  === 0) {
            return 'Insira um titulo.'
        }
        if (validate <= 3) {
            return 'Titulo deve ter mais que 3 caracteres'
        }
        if (validate > 100) {
            return 'Titulo muito grande'
        } 
    }

    const validateBody = (body) => {
        const validate = (body !== undefined ? body.length : props.post.body.length)
        if (validate  === 0) {
            return 'Insira um conteudo.'
        }
        if (validate < 5) {
            return 'O conteudo deve ter mais que 5 caracteres'
        }
        if (validate > 6000) {
            return 'O conteudo deve ter menos que 6000 caracteres'
        } 
    }

    const validateAuthor = (author) => {
        const validate = (author !== undefined ? author.length : props.post.author.length)
        if (validate  === 0) {
            return 'Insira um autor.'
        }
        if (validate < 3) {
            return 'O conteudo deve ter mais que 3 caracteres'
        }
        if (validate > 20) {
            return 'O conteudo deve ter menos que 20 caracteres'
        } 
    }

    const validateCategory = (category) => {
        const validate = (category !== undefined ? category : props.post.category)
        if (!((validate === 'redux') || (validate === 'react') || (validate === 'compasso'))) {
            return 'Insira uma categoria.'
        }
    }

  return (
       <div className="post-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{id ? 'Edit Post' : 'New Post'}</Heading>
        <Form className="post-form" key={props.post.id} onSubmit={id ? props.handleOnSubmit : props.handleOnSubmit}> 
            <FormField htmlFor="title" label="Title" name='title' validate={validateTitle}>
                <TextInput type="text" id="title" required name="title" 
                defaultValue={props.post.title}
                />
            </FormField>
            <FormField htmlFor="body" label="Body" name='body' validate={validateBody}>
                <TextArea resize="vertical" type="text" id="body" required name="body" 
                defaultValue={props.post.body}
                />
            </FormField>
            <FormField htmlFor="author" label="Author" name='author' validate={validateAuthor}>
                <TextInput type="text" required id="author" name="author" 
                disabled={id ? true : false}
                defaultValue={props.post.author}
                />
            </FormField>
            <FormField htmlFor="category" label="Category" name='category' validate={validateCategory}>
                <Select  
                disabled={id ? true : false}
                name="category"
                //valueLabel={props.post.category}
                defaultValue={props.post.category}
                options={categories.map((category) => (
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
