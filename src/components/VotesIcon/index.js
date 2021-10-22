import React from 'react'
import './style.css'
import { Box } from 'grommet'

export const VotesIcon = ({ votes }) => {
  return (
    <Box
      width={{ min: '5vh', max: '10vh' }}
      pad={{ vertical: '1%', horizontal: '2%' }}
      size="small"
      className="votes-icon"
    >
      {votes === 0 ? '0' : votes}
    </Box>
  )
}
