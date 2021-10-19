import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useParams } from 'react-router-dom'
import { useValidateForm } from '../../hooks';

export const CommentForm = (props) =>{
  const { validateComment, validateAuthor } = useValidateForm(props)
  const { cid } = useParams()

  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{cid ? 'Edit Comment' : 'New Comment'}</Heading>
        <Form className="comment-form" key={props.comment.id} onSubmit={cid ? props.handleComment : props.handleComment} 
        >
        <FormField htmlFor="comment" label="Comment" name='comment' validate={validateComment}>
            <TextArea resize="vertical" type="text" id="comment" name="comment" defaultValue={props.comment.body}/>
        </FormField>
        <FormField htmlFor="author" label="Author" name='author' validate={validateAuthor}>
            <TextInput type="text" id="author" name="author" disabled={cid ? true : false} defaultValue={props.comment.author}/>
        </FormField>
        <Box pad={{vertical: "small"}} justify="end" align="end">
        <ButtonSubmit/>
        </Box>
        </Form>
      </div>
  )
}