import React from 'react'
import Content from '../components/Content'
import Table from '../components/Table'
import { Box } from '@mui/material'
import { columns, rowsData } from '../services/storeApi'

const StoreManagement:React.FC = () => {
  return (
    <Content title='Store Management' hasBack>
      <Box sx={{ pt: 3 }}>
        <Table
          rowsData={rowsData}
          columnsData={columns}
          module={'Store'}
          hasCreate
        />
      </Box>
    </Content>
  )
}

export default StoreManagement