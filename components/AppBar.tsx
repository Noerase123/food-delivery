import React, { useState } from 'react'
import {
  Box,
  Typography,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MaleUserIcon from '../assets/icons/male-avatar.svg'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AppBar:React.FC = () => {
  const router = useRouter()
  const [openNotification, setNotification] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  type btnName = 'my profile' | 'settings' | 'logout'

  const handleBtnOptions = (name: btnName) => () => {
    handleClose()
    if (name === 'my profile') {  
      router.push('/profile')
    }
    if (name === 'settings') {
      router.push('/settings')
    }
    if (name === 'logout') {  
      router.push('/login')
    }
  }

  const triggerNotification = () => setNotification(!openNotification)

  const notifItems = [1,2,3]

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <Box sx={{ position: 'relative' }}>
          <IconButton onClick={triggerNotification}>
            <Badge badgeContent={notifItems.length} color='error'>
              <NotificationsIcon sx={{ width: 40, height: 40, color: '#607AAB' }} />
            </Badge>
          </IconButton>
          {openNotification && (
            <Box sx={{
              zIndex: 2,
              backgroundColor: '#fff',
              width: 350,
              height: 300,
              borderRadius: 3,
              border: '1px solid #e1e1e1',
              top: 50,
              right: 0,
              position: 'absolute',
              overflow: 'auto'
            }}>
              <Box sx={{ p: 1.5, backgroundColor: '#607AAB', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <IconButton sx={{ mr: 2 }} onClick={triggerNotification}>
                  <ArrowBackIcon sx={{ color: '#fff' }} />
                </IconButton>
                <Typography sx={{ fontSize: '18px', color: '#fff' }}>Notifications</Typography>
              </Box>
              {notifItems.length > 0 ? (
                <>
                  {notifItems.map((item, i) => (
                    <Box key={i} onClick={() => router.push('/notification')} sx={{ p: 2, border: '1px solid #cdcdcd', display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ fontSize: '14px', color: '#676767' }}>You have updated your store name!</Typography>
                      <Typography sx={{ fontSize: '14px', ml: 2 }}>1m ago</Typography>
                    </Box>
                  ))}
                </>
              ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                  <Typography sx={{ color: '#676767' }}>
                    No notification for now
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Box>
        <Box sx={{ mr: 2, ml: 5 }}>
          <Typography>Username</Typography>
          <Typography variant='caption'>admin</Typography>
        </Box>
        <IconButton onClick={handleClick}>
          <Image
            src={MaleUserIcon}
            alt='avatar'
            style={{
              width: 50,
              height: 50
            }}
          />
        </IconButton>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleBtnOptions('my profile')}>My Profile</MenuItem>
        <MenuItem onClick={handleBtnOptions('settings')}>Settings</MenuItem>
        <MenuItem onClick={handleBtnOptions('logout')}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default AppBar