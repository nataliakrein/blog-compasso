import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './style.css';
import { Text, Heading } from 'grommet';
import { getAllComments } from '../../redux/actions/commentActions'
import { getDate } from '../../pages'

import { Comment } from '..';

export const CommentList = (props, id) =>{
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const fetchPost = async (id) => {
        await dispatch(getAllComments(id)) 
    }
    fetchPost()
  }, [dispatch])


  return (
    <div className="comment-list">
    <Heading size="small" color="var(--title-post)" level="4">Comments</Heading> 
    {comments.length !== 0 ? 
    (comments.sort((a, b) => b.timestamp - a.timestamp).map((comment, index) => (
      <Comment 
        index={index}
        comment={comment}
        key={comment.id}
        getDate={getDate}
      />
    ))) : (
      <Text color="var(--text-post)" size="small">There are no comments for now.</Text>
    )
    }
    </div>
    )
  }
