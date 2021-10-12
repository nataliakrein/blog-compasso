import React, { useState, useEffect } from 'react';
import { CommentList, Post} from '../../components';
import { useHistory } from "react-router-dom";
import './style.css';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAllComments } from '../../actions'
import { getDate } from '../PostsPage'
import { useParams } from 'react-router-dom'

export const PostDetailPage = (props) => {
    const { id } = useParams()
    const history = useHistory();
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
    }, [])

    const { match } = props


  return (
      <div>
        {posts && posts.map(post => post.id === match.params.id && (
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

/*export const PostDetailPage = (props) => {
    const { id } = useParams()
    const history = useHistory();
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchPost = async () => {
            posts.length === 0 && await dispatch(getAllPosts()) 
            await dispatch(getAllComments(id)) 

        }
        fetchPost()
    }, [])

    const { match } = props
    
    const vote = async (id, option) => {
        await dispatch(votePost(id, option))
    }

    const delete_post = (id) => {
        dispatch(deletePost(id))
    }


  return (
      <div>
        {posts && posts.map(post => post.id === match.params.id && (
        <div className="post-detail_div" key={post.id}>
          <Card height={{min: '30vh', max: '100%'}} width="100%" background="light-1" basis="auto">
              <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                  <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                      <Heading size="small" color="var(--title-post)" level="4">{post.title}</Heading>
                      <Button primary size="small" label={(post.voteScore === 0) ? '0' : post.voteScore}/>
                  </Box>
                  <Text color="var(--date-post)" size="small">{getDate(post.timestamp)}  by <Text size="small" weight="bold">{post.author}</Text></Text>
              </CardHeader>
              <CardBody height="small" pad={{top: "none",
                              horizontal: "medium"}}>
                  <Text color="var(--text-post)" size="small">{post.body}</Text> 
              </CardBody>
              <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
                <Button tip="Edit"
                    nameContainer="Edit Post"
                    icon={<Edit color="grey" />}
                    hoverIndicator 
                    onClick={() => history.push(`/${post.category}/${post.id}/edit`)} 
                />
                <Button tip="Delete"
                    icon={<Trash color="grey" />}
                    hoverIndicator 
                    onClick={() => delete_post(post.id)}
                />
                <Button tip="Vote Up"
                    icon={<Like color="green" />}
                    hoverIndicator 
                    onClick={() => vote(post.id, 'upVote')}
                />
                <Button tip="Vote Down"
                    icon={<Dislike color="red" />}
                    hoverIndicator 
                    onClick={() => vote(post.id, 'downVote')}
                />
                <Box direction="row" align="center">
                    <Button tip="Add Comment"
                        icon={<Chat color="grey" />}
                        hoverIndicator 
                        onClick={() => history.push(`/${post.category}/${post.id}/comments/new`)}
                    />
                    <Text color="var(--text-post)">{post.comments}</Text>
                </Box>
            </CardFooter>
          </Card>
        </div>
        ))}
          <CommentList id={posts.map(post => post.id === id)}/> 
      </div>
  )
}*/