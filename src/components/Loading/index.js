import React from 'react';
import { Box, Spinner } from 'grommet';

export const Loading = () => {
  return (
  <Box width="100%" height="80vh" align="center" justify="center">
      <Spinner color="var(--title-post)" size="medium"/>
  </Box>)
}