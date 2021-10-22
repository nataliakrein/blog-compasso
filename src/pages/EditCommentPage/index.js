import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateComment } from '../../redux/actions/commentActions'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../../components';

export const EditCommentPage = (props) =>{
    const { cid, category } = useParams()
    const history = useHistory();
    const comments = useSelector(state => state.commentsReducer.comments)
    const dispatch = useDispatch()
    const [comment, setComment] = useState({})

    useEffect(() => {
        setComment(comments.find(comment => comment.id === cid))
    }, [category, comment, cid, comments]) 

    
    const handleCommentEdit = async (e) => { 
        e.preventDefault()
        await dispatch(updateComment(cid, { 
            timestamp: Date.now(),
            body: e.target.comment.value
        }))
        history.push('/')
    }

  return (
      <div>
        <CommentForm comment={comment} handleComment={handleCommentEdit}/>
      </div>
  )
}