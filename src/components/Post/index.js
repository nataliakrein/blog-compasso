import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../../actions'
import { VotesIcon } from '..';

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
    {/* <Button fill="vertical" primary size="small" label={(votes === 0) ? '0' : votes}/> 
    <Box 
                        width={{min: '5vh', max: '10vh'}}
                        pad={{vertical: "1%", horizontal: "2%"}}
                        size="small" 
                        className="post-votes">{(votes === 0) ? '0' : votes}</Box>


*/}
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
            {/*gap={medium} */}
            <CardFooter gap="xsmall" fill="horizontal" justify="evenly" margin={{top: "small"}} background="light-2">
                <Button tip="Edit"
                    nameContainer="Edit Post"
                    icon={<Edit color="grey" />}
                    hoverIndicator 
                    onClick={() => history.push(`/${category}/${id}/edit/`)} //ver isso aqui
                />
                <Button tip="Delete"
                    icon={<Trash color="grey" />}
                    hoverIndicator 
                    onClick={() => delete_post(id)}
                />
                <Button tip="Vote Up"
                    icon={<Like color="green" />}
                    hoverIndicator 
                    onClick={() => vote(id, 'upVote')}
                />
                <Button tip="Vote Down"
                    icon={<Dislike color="red" />}
                    hoverIndicator 
                    onClick={() => vote(id, 'downVote')}
                />
                <Box gap="xsmall" direction="row" align="center">
                    <Button tip="Add Comment"
                        icon={<Chat color="grey" />}
                        hoverIndicator 
                        onClick={() => history.push(`/${category}/${id}/comments/new`)}
                    />
                    <Text color="var(--text-post)">{comments}</Text>
                </Box>
            </CardFooter>
        </Card>
    </div>
  )
}