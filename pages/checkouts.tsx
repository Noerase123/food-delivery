import { Box } from '@mui/material'
import React from 'react'
import Content from '../components/Content'
import Table from '../components/Table'
import { columns, rowsData } from '../services/orderApi'

const Checkouts:React.FC = () => {
  return (
    <Content title='Checkouts' hasBack>
      <Box sx={{ pt: 3 }}>
        <Table
          rowsData={rowsData}
          columnsData={columns}
          module={'Checkout'}
          hasCreate
        />
      </Box>
    </Content>
  )
}

export default Checkouts