import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';
//height: small
//truncate="true"
export const Post = ({title, date, body, votes, comments, author}) =>{
  return (
    <div className="post">
        <Card height={{min: '30vh', max: '100%'}} width="100%" background="light-1" basis="auto">
            <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                    <Heading size="small" color="var(--title-post)" level="4">{title}</Heading>
                    <Button primary size="xsmall" label={votes}/>
                </Box>
                <Text color="var(--date-post)" size="small">{date}  by <Text size="small" weight="bold">{author}</Text></Text>
            </CardHeader>
            <CardBody height="small" pad={{top: "none",
                            horizontal: "medium"}}>
                <Text color="var(--text-post)" truncate="true" size="small">{body}</Text>
            </CardBody>
            <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
                <Button tip="Edit"
                nameContainer="Edit Post"
                icon={<Edit color="grey" />}
                hoverIndicator
                />
                <Button tip="Vote Down"
                icon={<Trash color="grey" />}
                hoverIndicator
                />
                <Button tip="Vote Up"
                icon={<Like color="green" />}
                hoverIndicator
                />
                <Button tip="Delete"
                icon={<Dislike color="red" />}
                hoverIndicator
                />
                <Box direction="row" align="center">
                    <Button tip="Add Comment"
                    icon={<Chat color="grey" />}
                    hoverIndicator 
                    />
                    <Text color="var(--text-post)">{comments}</Text>
                </Box>
            </CardFooter>
        </Card>
    </div>
  )
}