import React, { useState, useEffect } from 'react';
import { CommentList, Post} from '../../components';
import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAllComments } from '../../actions'
import { getDate } from '../PostsPage'
import { useParams } from 'react-router-dom'

export const PostDetailPage = (props) => {
    const { id } = useParams()
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            posts.length === 0 && await dispatch(getAllPosts()) 
            await dispatch(getAllComments(id)) 
            setPost(posts.find(post => post.id === id))
        }
        fetchPost()
    }, [dispatch, post, id, posts])

  return (
      <div>
        {posts && posts.map(post => post.id === id && ( //match.params.id
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
          <CommentList id={posts.map(post => post.id === id)}/> 
      </div>
  )
}