import React, {useEffect, useState} from 'react';
//import './style.css';
import { CommentForm } from '../../components';
import { addComment } from '../../actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { generateId } from '../../utils'

export const NewCommentPage = (props) =>{
    const dispatch = useDispatch()
    const history = useHistory();
    const { match } = props
    const [comment, setComment] = useState({
        id: '',
        timestamp: '',
        parentId: '',
        body: '',
        author: '',
    })

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
    <div>
        <CommentForm comment={comment} handleComment={handleNewComment}/>
    </div>
  )
}