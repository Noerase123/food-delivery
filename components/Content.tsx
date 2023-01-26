import React from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'
import AppBar from './AppBar'
import SideBar from './SideBar'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IProp {
  children: React.ReactNode
  title: string
  hasBack?: boolean
}

const Content:React.FC<IProp> = props => {
  const navigate = useRouter()
  const { children, title, hasBack } = props
  return (
    <React.Fragment>
      <Box>
        <SideBar>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <AppBar />
            </Box>
            <Box>
              <Box sx={{ display: 'flex' }}>
                {hasBack && (
                  <IconButton onClick={() => navigate.push('/')}>
                    <ArrowBackIcon sx={{ color: '#254AA5' }} />
                  </IconButton>
                )}
                <Typography variant='h4' sx={{ color: '#254AA5' }}>
                  {title}
                </Typography>
              </Box>
              {children}
            </Box>
          </Container>
        </SideBar>
      </Box>
    </React.Fragment>
  )
}

export default Content