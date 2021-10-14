import React from 'react';
import { Button } from 'grommet';
import { Edit } from 'grommet-icons';

export const EditButton = ({editItem}) => {
    return(
        <Button tip="Edit"
            nameContainer="Edit Post"
            icon={<Edit color="grey" />}
            hoverIndicator 
            onClick={editItem} 
        />
    )
}