import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, sortByTime, sortByVotes } from '../../redux/actions/postActions'
import { useHistory } from 'react-router-dom'
import './style.css';
import { Select, Button, Box } from 'grommet';
import { Loading, Post } from '../../components';
import * as moment from 'moment'
import { useParams } from 'react-router-dom'

export const getDate = (timestamp) => {
  const date = moment(timestamp).toString().split(' ')
  return date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3]
}

export const PostsPage = () =>{
  const { category } = useParams()
  const history = useHistory();
  const option = '';
  const dispatch = useDispatch();
  const Posts = useSelector(state => state.postsReducer.posts)
  const loading = useSelector(state => state.postsReducer.loading)

  useEffect(() => {
    dispatch(getAllPosts((category)), [])
  }, [category, dispatch])

  const sortBy = (option) => {
    let sortedPosts = Posts.slice()
    option = option.target.value
    option === 'Vote Score' ? dispatch(sortByVotes(sortedPosts)) : dispatch(sortByTime(sortedPosts))
  }
  
  return (loading ? <Loading/> :
    <div className="posts-page">
        <Box direction="row" gap="small" width="100%" height="10vh" align="center" pad="xsmall" justify="between">
          <Box width="70%">
          <Select  alignSelf="stretch" 
              a11yTitle="Posts filter"
              placeholder="Sort by..."
              options={['Vote Score', 'Date and Time']}
              value={option}
              onChange={(option) => sortBy(option)} 
              />
          </Box>
          <Box width="30%" fill="vertical">
          <Button justify="center" primary size="small" label="New Post" fill="vertical" nameContainer="New Post" onClick={() => history.push('/posts/new')}/>
          </Box>
        </Box>
          <Box gap="small" direction="column" width="100%" fill="horizontal" justify="evenly">
              {Posts && Posts.map((post) => (
                <Post 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  date={getDate(post.timestamp)} 
                  body={post.body.length >= 120 ? post.body.substring(0, 120) + "..." : post.body}
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