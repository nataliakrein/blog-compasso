import React from 'react'
import { Button } from 'grommet'
import { Trash } from 'grommet-icons'

export const DeleteButton = ({ deleteItem }) => {
  return <Button tip="Delete" icon={<Trash color="grey" />} hoverIndicator onClick={deleteItem} />
}
