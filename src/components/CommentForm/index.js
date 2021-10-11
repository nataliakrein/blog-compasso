import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useHistory } from "react-router-dom";
import { useState, useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { generateId } from '../../utils'
import { useParams } from 'react-router-dom'

export const CommentForm = (props) =>{
  const { cid, category, id } = useParams()
  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">{cid ? 'Edit Comment' : 'New Comment'}</Heading>
        <Form className="comment-form"  key={props.comment.id} onSubmit={cid ? props.handleComment : props.handleComment} 
        >
        <FormField name="comment" htmlFor="comment" label="Comment">
            <TextArea type="text" required id="comment" name="comment" defaultValue={props.comment.body}/>
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" required id="author" name="author" disabled={cid ? true : false} defaultValue={props.comment.author}/>
        </FormField>
        <ButtonSubmit/>
        </Form>
      </div>
  )
}

/*export const CommentForm = (props) =>{
  const dispatch = useDispatch()
  const history = useHistory();
  const { match } = props

  const handleNewComment = (e) => {
    e.preventDefault()
    const id = generateId()
    const timestamp = Date.now()
    dispatch(addComment({
        id,
        parentId: match.params.id,
        timestamp,
        body: e.target.comment.value,
        author: e.target.author.value,
    }))
    history.push('/')
}

  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">New Comment</Heading>
        <Form className="comment-form" onSubmit={handleNewComment} 
        >
        <FormField name="comment" htmlFor="comment" label="Comment">
            <TextArea type="text" required id="comment" name="comment" />
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" required id="author" name="author" />
        </FormField>
        <ButtonSubmit/>
        </Form>
      </div>
  )
}*/