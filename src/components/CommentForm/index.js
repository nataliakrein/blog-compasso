import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useParams } from 'react-router-dom'

export const CommentForm = (props) =>{

  const { cid } = useParams()

  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{cid ? 'Edit Comment' : 'New Comment'}</Heading>
        <Form className="comment-form" key={props.comment.id} onSubmit={cid ? props.handleComment : props.handleComment} 
        >
        <FormField name="comment" htmlFor="comment" label="Comment">
            <TextArea resize="vertical" type="text" required id="comment" name="comment" defaultValue={props.comment.body}/>
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" required id="author" name="author" disabled={cid ? true : false} defaultValue={props.comment.author}/>
        </FormField>
        <Box pad={{vertical: "small"}} justify="end" align="end">
        <ButtonSubmit/>
        </Box>
        </Form>
      </div>
  )
}