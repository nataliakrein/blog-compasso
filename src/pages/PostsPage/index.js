import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, sortByTime, sortByVotes, votePost, deletePost } from '../../actions'
import { Link } from 'react-router-dom'
import './style.css';
import { Select, Button, Box } from 'grommet';
import { Post } from '../../components';
import * as moment from 'moment'

export const getDate = (timestamp) => {
  const date = moment(timestamp)._d.toString().split(' ')
  return date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3]
}

export const PostsPage = (props) =>{
  const [option, setOption] = useState('')
  const [postsArray, setPostsArray] = useState([])
  const [applySort, setApplySort] = useState(false)
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    const fetchPosts = async () => {
      !applySort && await dispatch(getAllPosts((props.match.params.category)), [])
      await setPostsArray(posts)
    }
    fetchPosts()
  }, [props.match.params.category])

  const sortBy = (option) => {
    let sortedPosts = posts.slice()
    option === 'votes' ? dispatch(sortByVotes(sortedPosts)) : dispatch(sortByTime(sortedPosts))
    setApplySort(true)
  }

  const vote = async (id, option) => {
    await dispatch(votePost(id, option))
  }

  const delete_post = (id) => {
    dispatch(deletePost(id))
  }

  return (
      <div className="posts-page">
          <Box direction="row" width="100%" align="stretch" justify="evenly">
            <Select alignSelf="stretch"
                a11yTitle="Posts filter"
                placeholder="Sort by..."
                options={['Vote Score', 'Date and Time']}
                value={option}
                onChange={() => sortBy()}
                />
            <Button primary label="New Post" nameContainer="New Post"/>
          </Box>
            <Box direction="column" width="100%" justify="evenly">
                {posts && posts.map((post, index) => (
                  <Post 
                    key={post.id}
                    title={post.title}
                    date={getDate(post.timestamp)} 
                    body={post.body}
                    votes={post.voteScore}
                    comments={post.commentCount}
                    author={post.author}
                  />
                ))}
            </Box>

      </div>
  )
}