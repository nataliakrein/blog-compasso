import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';
import { useHistory } from "react-router-dom";
import { useState, useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { generateId } from '../../utils'
import { useParams } from 'react-router-dom'

export const CommentFormEdit = (props) =>{
    const { cid, category, id } = useParams()
    const history = useHistory();
    const comments = useSelector(state => state.comments)
    const comment = comments.find(comment => comment.id === cid)
    console.log(comment.body)
    const dispatch = useDispatch()

    const edit_comment = async (id, e) => {
        e.preventDefault()
        await dispatch(updateComment(id, {
            timestamp: Date.now(),
            body: e.target.edit.value
        }))
        //props.history.go(0)
        //history.go(0)
        history.push('/')
    }

  return (
      <div className="comment-form-div_edit">
        <Heading size="small" color="var(--title-post)" level="3">Edit Commentary</Heading>
            <Form className="comment-form_edit" onSubmit={(e) => edit_comment(comment.id, e)}>
                <FormField name="edit" htmlFor="edit" label="Comment">
                    <TextArea defaultValue={comment.body} type="text" required id="edit" name="edit" />
                </FormField>
                <FormField name="author" htmlFor="author" label="Author">
                    <TextInput type="text" defaultValue={comment.author} disabled id="author" name="author" />
                </FormField>
                <ButtonSubmit/> 
            </Form>
      </div>
  )
}