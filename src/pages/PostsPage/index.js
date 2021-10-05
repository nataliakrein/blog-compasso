import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, sortByTime, sortByVotes, votePost, deletePost } from '../../actions'
import { useHistory, Link } from 'react-router-dom'
import './style.css';
import { Select, Button, Box } from 'grommet';
import { Post } from '../../components';
import * as moment from 'moment'
import { useParams } from 'react-router-dom'


export const getDate = (timestamp) => {
  const date = moment(timestamp)._d.toString().split(' ')
  return date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3]
}

export const PostsPage = (props) =>{
  const { category } = useParams()
  const history = useHistory();
  const [option, setOption] = useState('')
  const [postsArray, setPostsArray] = useState([])
  const [applySort, setApplySort] = useState(false)
  const dispatch = useDispatch();
  const Posts = useSelector(state => state.posts)
  console.log(Posts)
  useEffect(() => {
    const fetchPosts = async () => {
      !applySort && await dispatch(getAllPosts((category)), []) //props.match.params.category
      await setPostsArray(Posts)
    }
    fetchPosts()
  }, [category])

  const sortBy = (option) => {
    let sortedPosts = Posts.slice()
    option = option.target.value
    option === 'Vote Score' ? dispatch(sortByVotes(sortedPosts)) : dispatch(sortByTime(sortedPosts))
    //votes
    //setApplySort(true)
  }
  
  return (
      <div className="posts-page">
          <Box direction="row" width="100%" align="stretch" justify="evenly">
            <Select alignSelf="stretch"
                a11yTitle="Posts filter"
                placeholder="Sort by..."
                options={['Vote Score', 'Date and Time']}
                value={option}
                onChange={(option) => sortBy(option)}
                />
            <Button primary label="New Post" nameContainer="New Post" onClick={() => history.push('/posts/new')}/>
          </Box>
            <Box direction="column" width="100%" justify="evenly">
                {Posts && Posts.map((post, index) => (
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
                ))}
            </Box>

      </div>
  )
}