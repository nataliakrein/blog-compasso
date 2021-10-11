import React, { useEffect, useState } from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateComment } from '../../actions'
import { useParams } from 'react-router-dom'
import { CommentForm } from '../../components';

export const EditCommentPage = (props) =>{
    const { cid, category, id } = useParams()
    const history = useHistory();
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()
    const [comment, setComment] = useState({})

    useEffect(() => {
        setComment(comments.find(comment => comment.id === cid))
    }, [category, comment])

    
    const handleCommentEdit = async (e) => { //(id, e
        e.preventDefault()
        await dispatch(updateComment(cid, { //id
            timestamp: Date.now(),
            body: e.target.comment.value
        }))
        //props.history.go(0)
        //history.go(0)
        history.push('/')
    }

  return (
      <div className="comment-form-div_edit">
        <CommentForm comment={comment} handleComment={handleCommentEdit}/>
      </div>
  )
}