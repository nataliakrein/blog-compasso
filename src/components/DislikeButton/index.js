import React from 'react';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
import { Dislike } from 'grommet-icons';

export const DislikeButton = ({dislikeItem}) => {
    return(
        <Button tip="Vote Down"
            icon={<Dislike color="red" />}
            hoverIndicator 
            onClick={dislikeItem}
        />
    )
}