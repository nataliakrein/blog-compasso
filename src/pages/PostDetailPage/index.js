import React, { useState } from 'react';
import { CommentList, Post} from '../../components';
import { useHistory } from "react-router-dom";
import './style.css';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts, getAllComments, votePost, addComment, voteComment, deletePost, deleteComment, updateComment } from '../../actions'
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
import { withRouter } from 'react-router-dom'
import { generateId } from '../../utils'
import { getDate } from '../PostsPage'

//import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
//import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';

export const PostDetailPage = (props) => {
    const history = useHistory();
    //const [commentBox, setCommentBox] = useState(false)
    const posts = useSelector(state => state.posts)
    //const comments = useSelector(state => state.comments)

    const dispatch = useDispatch()
    React.useEffect(() => {
        const fetchPost = async () => {
            posts.length === 0 && await dispatch(getAllPosts()) //fetch posts only when user enters the id through url
            await dispatch(getAllComments(props.match.params.id))
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


    if (posts.filter(post => post.id === props.match.params.id).length === 0)
        return <div>
            Post not found
        </div> 

    /*const comment = (e) => {
        e.preventDefault()
        const id = generateId()
        const timestamp = Date.now()
        dispatch(addComment({
            id,
            parentId: match.params.id,
            timestamp,
            body: e.target.body.value,
            author: e.target.author.value,
        }))
        e.target.body.value = ''
        e.target.author.value = ''
    }*/

    /*const vote_comment = (id, option) => {
        dispatch(voteComment(id, option))
    }

    const delete_comment = (id) => {
        dispatch(deleteComment(id))
    }

    const edit_comment = async (id, e) => {
        e.preventDefault()
        await dispatch(updateComment(id, {
            timestamp: Date.now(),
            body: e.target.edit.value
        }))
        props.history.go(0)
    }*/
  return (
      <div>
        {posts && posts.map(post => post.id === match.params.id && (
        <div className="post-detail_div" key={post.id}>
          <Card height={{min: '30vh', max: '100%'}} width="100%" background="light-1" basis="auto">
              <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                  <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                      <Heading size="small" color="var(--title-post)" level="4">{post.title}</Heading>
                      <Button primary size="xsmall" label={post.votes}/>
                  </Box>
                  <Text color="var(--date-post)" size="small">{getDate(post.timestamp)}  by <Text size="small" weight="bold">{post.author}</Text></Text>
              </CardHeader>
              <CardBody height="small" pad={{top: "none",
                              horizontal: "medium"}}>
                  <Text color="var(--text-post)" size="small">{post.body}</Text> {/* ver readmore */}
              </CardBody>
              <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
                <Button tip="Edit"
                    nameContainer="Edit Post"
                    icon={<Edit color="grey" />}
                    hoverIndicator 
                    onClick={() => history.push(`/${post.category}/${post.id}/edit`)} //ver isso aqui
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
          <CommentList id={posts.map(post => post.id === match.params.id)}/>
      </div>
  )
}