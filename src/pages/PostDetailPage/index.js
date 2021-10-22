import React, { useEffect } from 'react';
import { CommentList, Post, Loading } from '../../components';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { getAllComments } from '../../redux/actions/commentActions'
import { getDate } from '../PostsPage'
import { useParams } from 'react-router-dom'

export const PostDetailPage = () => {
    const { id } = useParams()
    const posts = useSelector(state => state.postsReducer.posts)
    const loading = useSelector(state => state.postsReducer.loading)
    const loadingComments = useSelector(state => state.commentsReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchPost = async () => {
            await dispatch(getAllComments(id)) 
        }
        fetchPost()
    }, [dispatch, id])
    
    return (
    loading ? <Loading/> :
      (<div>
        {posts.map(post => post.id === id && (  
        <div className="post-detail_div" key={post.id}>
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            date={getDate(post.timestamp)} 
            body={post.body}
            votes={post.voteScore}
            comments={post.commentCount}
            author={post.author}
            category={post.category}
          />
        </div>
        ))}
          {loadingComments ? <Loading/> : <CommentList/> }
      </div>)
  )
}