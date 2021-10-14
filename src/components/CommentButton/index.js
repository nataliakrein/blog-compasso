import React from 'react';
import { Button, Text, Box } from 'grommet';
import { Chat } from 'grommet-icons';

export const CommentButton = ({comments, newComment}) => {
    return(
        <Box gap="xsmall" direction="row" align="center">
            <Button tip="Add Comment"
                icon={<Chat color="grey" />}
                hoverIndicator 
                onClick={newComment} 
            />
            <Text color="var(--text-post)">{comments}</Text>
        </Box>
    )
}