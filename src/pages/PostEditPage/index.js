import React, {useEffect, useState} from 'react';
import { PostForm } from '../../components';
import { editPost } from '../../redux/actions/postActions'
import { getCategories } from '../../redux/actions/categoryActions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const PostEditPage = (props) =>{
    const history = useHistory();
    const { category, id} = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsReducer.posts)
    const [post, setPost] = useState({})

    useEffect(() => {
        dispatch(getCategories())
        setPost(posts.find(post => post.id === id))
    }, [category, dispatch, posts, id])

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await dispatch(editPost(id, {
            title: e.target.title.value,
            body: e.target.body.value,
        }))
        history.push('/')
    }

  return (
    <div>
        <PostForm post={post} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}
