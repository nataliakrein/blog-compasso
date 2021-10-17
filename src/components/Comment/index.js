import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Card, CardFooter, CardHeader, CardBody, Text, Box } from 'grommet';
import { voteComment, deleteComment } from '../../actions'
import { LikeButton, VotesIcon, DeleteButton, DislikeButton, EditButton } from '..';
import { useParams } from 'react-router-dom' 

export const Comment = ({comment, getDate}) =>{
    console.log(comment.id)
    const history = useHistory();
    const dispatch = useDispatch()
    const { category, id } = useParams()

    const vote_comment = (id, option) => {
        dispatch(voteComment(id, option))
    }

    const delete_comment = (id) => {
        dispatch(deleteComment(id))
    }

    return (
        <div className="comment">
            <Card height={{min: '20vh', max: '100%'}} width="95%" background="light-1" basis="auto">
                <CardHeader direction="column" align="start" pad={{top: "medium", bottom: "xsmall", horizontal: "medium"}} gap="xsmall">
                    <Box gap="medium" direction="row" align="center" fill="horizontal" justify="between">
                        <Text color="var(--date-post)" size="small" weight="bold">by <Text size="small">{comment.author}</Text> on {getDate(comment.timestamp)}</Text>
                        <VotesIcon votes={comment.voteScore}/>
                    </Box>
                </CardHeader>
                <CardBody height="small" pad={{horizontal: "medium"}}>
                    <Text color="var(--text-post)" size="small">{comment.body}</Text>
                </CardBody>
                <CardFooter gap="xsmall" fill="horizontal" margin={{top: "small"}} justify="evenly" pad={{horizontal: "small"}} background="light-2">
                    <EditButton
                        editItem={() => history.push(`/${category}/${id}/comments/${comment.id}/edit`)}
                    />
                    <DeleteButton 
                        deleteItem={() => delete_comment(comment.id)}
                    />
                    <LikeButton
                        likeItem={() => vote_comment(comment.id, 'upVote')}
                    />
                    <DislikeButton 
                        dislikeItem={() => vote_comment(comment.id, 'downVote')}
                    />
                </CardFooter>
            </Card>
        </div>
      )
}

