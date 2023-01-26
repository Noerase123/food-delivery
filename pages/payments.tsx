import React from 'react'
import Content from '../components/Content'
import { Box } from '@mui/material'
import Table from '../components/Table'
import { columns, rowsData } from '../services/orderApi'

const Payments:React.FC = () => {
  return (
    <Content title='Payments' hasBack>
      <Box sx={{ pt: 3 }}>
        <Table
          module={'Checkout'}
          rowsData={rowsData}
          columnsData={columns}
          hasCreate={false}
        />
      </Box>
    </Content>
  )
}

export default Payments