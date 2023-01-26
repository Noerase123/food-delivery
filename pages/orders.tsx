import React from 'react'
import { Box } from '@mui/material'
import Content from '../components/Content'
import TransactionTracker from '../components/TransactionTracker'
import Table from '../components/Table'
import { menuTabs, columns, rowsData } from '../services/orderApi'

const Orders:React.FC = () => {
  return (
    <Content title='Order Management' hasBack>
      <TransactionTracker />
      <Box sx={{ pt: 3 }}>
        <Table
          rowsData={rowsData}
          columnsData={columns}
          module={'Order'}
          hasTab
          tabMenus={menuTabs}
          hasCreate
        />
      </Box>
    </Content>
  )
}

export default Orders