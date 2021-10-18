import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useParams } from 'react-router-dom'

export const CommentForm = (props) =>{

  const { cid } = useParams()

  const validateAuthor = (author) => {
    const validate = (author !== undefined ? author.length : props.comment.author.length)
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

  const validateComment = (comment) => {
    const validate = (comment !== undefined ? comment.length : props.comment.body.length)
    if (validate  === 0) {
        return 'Insira um comentário.'
    }
    if (validate < 3) {
      return 'O conteudo deve ter mais que 3 caracteres'
  }
    if (validate > 300) {
        return 'Comentário muito grande'
    } 
}

  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{cid ? 'Edit Comment' : 'New Comment'}</Heading>
        <Form className="comment-form" key={props.comment.id} onSubmit={cid ? props.handleComment : props.handleComment} 
        >
        <FormField name="comment" htmlFor="comment" label="Comment" name='comment' validate={validateComment}>
            <TextArea resize="vertical" type="text" required id="comment" name="comment" defaultValue={props.comment.body}/>
        </FormField>
        <FormField name="author" htmlFor="author" label="Author" name='author' validate={validateAuthor}>
            <TextInput type="text" required id="author" name="author" disabled={cid ? true : false} defaultValue={props.comment.author}/>
        </FormField>
        <Box pad={{vertical: "small"}} justify="end" align="end">
        <ButtonSubmit/>
        </Box>
        </Form>
      </div>
  )
}