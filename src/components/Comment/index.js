import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';

export const Comment = () =>{
  return (
    <div className="comment">
        <Card height="small" width="100%" background="light-1" basis="auto">
            <CardHeader direction="column" align="start" pad="medium" gap="xsmall">
                <Box direction="row" alignContent="center" fill="horizontal" justify="between">
                    <Text color="var(--date-post)" size="small" weight="bold">by <Text size="small">thingone</Text></Text>
                    <Button background-color="var(--title-post)" size="xsmall" label="0"/>
                </Box>
            </CardHeader>
            <CardBody height="small" pad={{top: "none",
                            horizontal: "medium"}}>
                <Text color="var(--text-post)" size="small">Hi there! I am a COMMENT.</Text>
            </CardBody>
            <CardFooter justify="evenly" pad={{horizontal: "small"}} background="light-2">
                <Button tip="Edit"
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
                    <Text color="var(--text-post)">0</Text>
                </Box>
            </CardFooter>
        </Card>
    </div>
  )
}