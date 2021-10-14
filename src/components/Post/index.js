import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, CardBody, Text, Heading, Box } from 'grommet';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../../actions'
import { VotesIcon, DeleteButton, DislikeButton, EditButton, LikeButton, CommentButton } from '..';

export const Post = ({title, date, body, votes, comments, author, category, id}) =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const vote = async (id, option) => {
        await dispatch(votePost(id, option))
    }

    const delete_post = (id) => {
        dispatch(deletePost(id))
        history.push('/')
    }

  return (
    <div className="post">
        <Card height={{min: '30vh', max: '100%'}} width="100%" fill="horizontal" background="light-1" basis="auto">
            <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                <Box gap="medium" direction="row" align="center" fill="horizontal" justify="between">
                    <Heading size="small" color="var(--title-post)" level="4"><Link to={`/${category}/${id}`}>{title}</Link></Heading>
                    <VotesIcon votes={votes}/>
                </Box>
                <Text color="var(--date-post)" size="small">{date}  by <Text size="small" weight="bold">{author}</Text></Text>
            </CardHeader>
            <CardBody height="small" pad={{horizontal: "medium"}}>
                <Text color="var(--text-post)" size="small">{body}</Text> 
            </CardBody>
            <CardFooter gap="xsmall" fill="horizontal" justify="evenly" margin={{top: "small"}} background="light-2">
                <EditButton 
                    editItem={() => history.push(`/${category}/${id}/edit/`)}
                />
                <DeleteButton 
                    deleteItem={() => delete_post(id)}
                />
                <LikeButton
                    likeItem={() => vote(id, 'upVote')}
                />
                <DislikeButton 
                    dislikeItem={() => vote(id, 'downVote')}
                />
                <CommentButton
                    newComment={() => history.push(`/${category}/${id}/comments/new`)}
                    comments={comments}
                />
            </CardFooter>
        </Card>
    </div>
  )
}