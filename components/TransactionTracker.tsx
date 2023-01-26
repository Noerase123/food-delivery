import React from 'react'
import { Card, Grid, Typography, Box } from '@mui/material'

const TransactionTracker:React.FC = () => {

  const items = [
    {
      label: 'Transaction Date',
      value: '12-12-2022'
    },
    {
      label: 'Total Orders',
      value: '212'
    },
    {
      label: 'Total Completed',
      value: '200'
    },
    {
      label: 'Total Revenue',
      value: 'php 123,123'
    }
  ]

  return (
    <Card elevation={0} sx={{ p: 2, width: '55%', backgroundColor: '#E5F3FF', borderRadius: 2 }}>
      <Grid container>
        {items.map((item, i) => (
          <Grid item key={i} xs={3}>
            <Box>
              <Typography sx={{ textAlign: 'center', color: '#254AA5', fontWeight: '600' }}>
                {item.label}
              </Typography>
              <Typography sx={{ textAlign: 'center', color: '#254AA5', fontWeight: '600' }}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}

export default TransactionTracker