import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'


import { Card, CardFooter, CardHeader, Button, CardBody, Text,  FormField, TextArea, Form, TextInput, Heading, Box } from 'grommet';
//import { Form, TextInput, Heading, FormField, TextArea, Button, Box } from 'grommet';
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
import { ButtonSubmit, CommentForm } from '..';

export const Comment = ({commentBox, comment, setCommentBox, getDate}) =>{
    const history = useHistory();
    const dispatch = useDispatch()

    const vote_comment = (id, option) => {
        dispatch(voteComment(id, option))
    }

    const delete_comment = (id) => {
        dispatch(deleteComment(id))
    }

    const edit_comment = async (id, e) => {
        e.preventDefault()
        await dispatch(updateComment(id, {
            timestamp: Date.now(),
            body: e.target.edit.value
        }))
        //props.history.go(0)
        history.go(0)
    }

  return (
    <div className="comment">
        {!commentBox ? (<Card height="small" width="100%" background="light-1" basis="auto">
            <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                    <Text color="var(--date-post)" size="small" weight="bold">by <Text size="small">{comment.author}</Text> on {getDate(comment.timestamp)}</Text>
                    <Button background-color="var(--title-post)" size="xsmall" label={comment.voteScore}/>
                </Box>
            </CardHeader>
            <CardBody height="small" pad={{top: "none",
                            horizontal: "medium"}}>
                <Text color="var(--text-post)" size="small">{comment.body}</Text>
            </CardBody>
            <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
                <Button tip="Edit"
                icon={<Edit color="grey" />}
                hoverIndicator 
                onClick={() => setCommentBox(true)} 
                />
                <Button tip="Delete"
                icon={<Trash color="grey" />}
                hoverIndicator 
                onClick={() => delete_comment(comment.id)}
                />
                <Button tip="Vote Up"
                icon={<Like color="green" />}
                hoverIndicator
                onClick={() => vote_comment(comment.id, 'upVote')}
                />
                <Button tip="Vote Down"
                icon={<Dislike color="red" />}
                hoverIndicator 
                onClick={() => vote_comment(comment.id, 'downVote')}
                />
            </CardFooter>
        </Card>) : (
            <Form onSubmit={(e) => edit_comment(comment.id, e)}>
                <FormField name="edit" htmlFor="edit" label="Comment">
                    <TextArea defaultValue={comment.body} type="text" required id="edit" name="edit" />
                </FormField>
                <FormField name="author" htmlFor="author" label="Author">
                    <TextInput type="text" defaultValue={comment.author} disabled id="author" name="author" />
                </FormField>
            <ButtonSubmit/> 
            </Form>
        )}
    </div>
  )
}

/*<CommentForm  
                onSubmit={(e) => edit_comment(comment.id, e)}
                defaultValue={comment.body}/> */