import React from 'react'
import Content from '../components/Content'
import { Typography } from '@mui/material'

const Notification:React.FC = () => {
  return (
    <Content title='My Notifications' hasBack>
      <Typography>Hello world</Typography>
    </Content>
  )
}

export default Notification