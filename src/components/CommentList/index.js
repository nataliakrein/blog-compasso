import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { getDate } from '../../pages'

import { Comment } from '..';

export const CommentList = (props, id) =>{
  const [commentBox, setCommentBox] = useState(false)

  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()

  const { match } = props

  React.useEffect(() => {
    const fetchPost = async (id) => {
        await dispatch(getAllComments(id)) //props.match.params.id
    }
    fetchPost()
}, [])

  return (
    comments && comments.sort((a, b) => b.timestamp - a.timestamp).map((comment, index) => (
      <Comment 
        index={index}
        //commentBox={commentBox}
        //setCommentBox={setCommentBox}
        comment={comment}
        key={comment.id}
        getDate={getDate}
      />
    ))
    )
  }

    {/*<div className="comment-list">
        <Heading size="small" color="var(--title-post)" level="5">Comments</Heading>
        <Text color="var(--text-post)" truncate="true" size="small">There are no comments for now.</Text>
    </div>*/}