import React from 'react'
import Content from '../components/Content'
import Table from '../components/Table'
import { Box } from '@mui/material'
import { columns, rowsData } from '../services/orderApi'

const Customers:React.FC = () => {
  return (
    <Content title='Customers' hasBack>
      <Box sx={{ pt: 3 }}>
        <Table
          rowsData={rowsData}
          columnsData={columns}
          module={'Customers'}
          hasCreate
        />
      </Box>
    </Content>
  )
}

export default Customers