import React from 'react';
import { PostForm } from '../../components';
import { createPost } from '../../redux/actions/postActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { generateId } from '../../service'

export const NewPostPage = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch()
    const post = ({
        id: '',
        timestamp: '',
        title: '',
        body: '',
        author: '',
        category: '',
    })

    const handleOnSubmit = async (e) => {
            e.preventDefault();    
            const id = generateId()
            const timestamp = Date.now()
            await dispatch(createPost({
                id,
                timestamp,
                title: e.target.title.value,
                body: e.target.body.value,
                author: e.target.author.value,
                category: e.target.category.value
        }))
        history.push('/')
      };

  return (
    <div>
        <PostForm post={post} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}
