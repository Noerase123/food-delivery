import React from 'react'
import Content from '../components/Content'
import { Card, Typography, Box, Grid } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import RevenueIcon from '../assets/icons/revenue.svg'
import OrderServedIcon from '../assets/icons/order-served.svg'

const Web:React.FC = () => {
  return (
    <Content title='Dashboard'>
      <Grid container spacing={3}>
        {['Total Revenue', 'Total Order Served', 'Customers Served'].map((item, i) => (
          <Grid key={i} item xs={4}>
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant='h5' fontWeight={'700'}>
                    P928,271.85
                  </Typography>
                  <Typography>
                    {item}
                  </Typography>
                </Box>
                {i % 2 === 0 ? (
                  <Image
                    src={RevenueIcon}
                    alt='revenue'
                    style={{
                      width: '15%',
                      height: '15%'
                    }}
                  />
                ) : (
                  <Image
                    src={OrderServedIcon}
                    alt='order-served'
                    style={{
                      width: '15%',
                      height: '15%'
                    }}
                  />
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Card sx={{ p: 3 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ mr: 2 }}>Transactions</Typography>
            <Typography>As of {moment().format('ll')}</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h5' fontWeight={'bold'} sx={{ mr: 1 }}>
                    3
                  </Typography>
                  <Typography>
                    Pending Orders
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h5' fontWeight={'bold'} sx={{ mr: 1 }}>
                    3
                  </Typography>
                  <Typography>
                    Ongoing Delivery
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h5' fontWeight={'bold'} sx={{ mr: 1 }}>
                    3
                  </Typography>
                  <Typography>
                    Completed Delivery
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h5' fontWeight={'bold'} sx={{ mr: 1 }}>
                    3
                  </Typography>
                  <Typography>
                  Cancelled Orders
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Content>
  );
}

export default Web