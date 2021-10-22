import React from 'react'
import { Button } from 'grommet'
import { Like } from 'grommet-icons'

export const LikeButton = ({ likeItem }) => {
  return <Button tip="Vote Up" icon={<Like color="green" />} hoverIndicator onClick={likeItem} />
}
