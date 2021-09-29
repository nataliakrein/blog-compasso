import React from 'react';
import './style.css';
import { Button, Box } from 'grommet';

export const ButtonSubmit = () =>{
  return (
        <Box className="button-submit" cldirection="row" gap="medium">
            <Button type="submit" primary label="Submit" />
        </Box>
  )
}