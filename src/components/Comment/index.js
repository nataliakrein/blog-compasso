import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardFooter, CardHeader, Button, CardBody, Text,  FormField, TextArea, Form, TextInput, Heading, Box } from 'grommet';
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
import { ButtonSubmit, CommentForm, VotesIcon } from '..';
import { useParams } from 'react-router-dom' //


export const Comment = ({commentBox, comment, setCommentBox, getDate}) =>{
    console.log(comment.id)
    const history = useHistory();
    const dispatch = useDispatch()
    const { category, id } = useParams() //
    const vote_comment = (id, option) => {
        dispatch(voteComment(id, option))
    }

    const delete_comment = (id) => {
        dispatch(deleteComment(id))
    }
    {/*<Button fill="vertical" primary size="small" label={(comment.voteScore === 0) ? '0' : comment.voteScore}/> */}
    return (
        <div className="comment">
            <Card height={{min: '20vh', max: '100%'}} width="95%" background="light-1" basis="auto">
                <CardHeader direction="column" align="start" pad={{top: "medium", bottom: "xsmall", horizontal: "medium"}} gap="xsmall">
                    <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                        <Text color="var(--date-post)" size="small" weight="bold">by <Text size="small">{comment.author}</Text> on {getDate(comment.timestamp)}</Text>
                        <VotesIcon votes={comment.voteScore}/>
                    </Box>
                </CardHeader>
                <CardBody height="small" pad={{horizontal: "medium"}}>
                    <Text color="var(--text-post)" size="small">{comment.body}</Text>
                </CardBody>
                <CardFooter gap="xsmall" fill="horizontal" margin={{top: "small"}} justify="evenly" pad={{horizontal: "small"}} background="light-2">
                    <Button tip="Edit"
                    icon={<Edit color="grey" />}
                    hoverIndicator 
                    onClick={() => history.push(`/${category}/${id}/comments/${comment.id}/edit`)}
                    //onClick={(e) => { setCommentBox(true) }} 
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
            </Card>
        </div>
      )
}

