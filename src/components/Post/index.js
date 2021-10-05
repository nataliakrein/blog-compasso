import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
import { Link } from 'react-router-dom'
import { votePost, deletePost } from '../../actions'
//height: small
//truncate="true"
export const Post = ({title, date, body, votes, comments, author, category, id}) =>{
    const history = useHistory();

    const dispatch = useDispatch();

    const vote = async (id, option) => {
        await dispatch(votePost(id, option))
    }

    const delete_post = (id) => {
        dispatch(deletePost(id))
    }

  return (
    <div className="post">
        <Card height={{min: '30vh', max: '100%'}} width="100%" background="light-1" basis="auto">
            <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                    <Heading size="small" color="var(--title-post)" level="4"><Link to={`/${category}/${id}`}>{title}</Link></Heading>
                    <Button primary size="xsmall" label={votes}/>
                </Box>
                <Text color="var(--date-post)" size="small">{date}  by <Text size="small" weight="bold">{author}</Text></Text>
            </CardHeader>
            <CardBody height="small" pad={{top: "none",
                            horizontal: "medium"}}>
                <Text color="var(--text-post)" truncate="true" size="small">{body}</Text> {/* ver readmore */}
            </CardBody>
            <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
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
                <Box direction="row" align="center">
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