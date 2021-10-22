import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/actions/categoryActions'
import './style.css'
import { Form, TextInput, Heading, FormField, Select, TextArea, Box } from 'grommet'
import { ButtonSubmit } from '..'
import { useParams } from 'react-router-dom'
import { useValidateForm } from '../../hooks'

export const PostForm = (props) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const categories = useSelector((state) => state.categoriesReducer.categories)
  const { validateAuthor, validateBody, validateCategory, validateTitle } = useValidateForm(props)

  useEffect(() => {
    dispatch(getCategories())
  }, [props, dispatch])

  return (
    <div className="post-form-div">
      <Heading size="small" color="var(--title-post)" level="3">
        {id ? 'Edit Post' : 'New Post'}
      </Heading>
      <Form className="post-form" key={props.post.id} onSubmit={id ? props.handleOnSubmit : props.handleOnSubmit}>
        <FormField htmlFor="title" label="Title" name="title" validate={validateTitle}>
          <TextInput type="text" id="title" name="title" defaultValue={props.post.title} />
        </FormField>
        <FormField htmlFor="body" label="Body" name="body" validate={validateBody}>
          <TextArea resize="vertical" type="text" id="body" name="body" defaultValue={props.post.body} />
        </FormField>
        <FormField htmlFor="author" label="Author" name="author" validate={validateAuthor}>
          <TextInput
            type="text"
            id="author"
            name="author"
            disabled={id ? true : false}
            defaultValue={props.post.author}
          />
        </FormField>
        <FormField htmlFor="category" label="Category" name="category" validate={validateCategory}>
          <Select
            disabled={id ? true : false}
            name="category"
            defaultValue={props.post.category}
            options={categories.map((category) => category.path)}
            placeholder={props.post.category}
          />
        </FormField>
        <Box className="button-submit" cldirection="row" gap="medium">
          <ButtonSubmit />
        </Box>
      </Form>
    </div>
  )
}
