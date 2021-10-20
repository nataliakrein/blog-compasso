import React from 'react';
import { CommentForm } from '../../components';
import { addComment } from '../../redux/actions/commentActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { generateId } from '../../service'

export const NewCommentPage = (props) =>{
    const dispatch = useDispatch()
    const history = useHistory();
    const { match } = props
    const comment = ({
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