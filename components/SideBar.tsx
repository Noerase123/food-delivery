import * as React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemButton,
  ListItemText
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

const drawerWidth = 240;

interface IProp {
  children: React.ReactNode
}

const CustomDrawer:React.FC<IProp> = ({ children }) => {
  const router = useRouter()

  const menus = [
    {
      label: 'Dashboard',
      route: '/'
    },
    {
      label: 'Store Management',
      route: '/store'
    },
    {
      label: 'Customers',
      route: '/customers'
    },
    {
      label: 'Orders',
      route: '/orders'
    },
    {
      label: 'Checkouts',
      route: '/checkouts'
    },
    {
      label: 'Payments',
      route: '/payments'
    }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#607AAB',
            color: '#fff'
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography>Logo</Typography>
        </Toolbar>
        <Divider sx={{ border: '1px solid #cdcdcd' }} />
        <List>
          {menus.map((text, index) => (
            <ListItem key={text.label} disablePadding>
              <ListItemButton onClick={() => router.push(text.route)}>
                <ListItemIcon sx={{ color: '#fff' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default CustomDrawer