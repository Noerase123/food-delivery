import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Input,
  IconButton,
  Badge,
  Typography,
  Chip
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';

export interface IColumn {
  label: string
  value: string
}

export interface ITabs {
  title: string
  name: string
  newItemCount: number
}

interface IPropCustomerTable {
  rowsData?: any[]
  columnsData?: IColumn[]
  module?: string
  hasTab?: boolean
  tabMenus?: ITabs[]
  hasCreate?: boolean
}

const CustomTable:React.FC<IPropCustomerTable> = ({
  rowsData = [],
  columnsData = [],
  module = '',
  hasTab = false,
  tabMenus = [],
  hasCreate = true
}) => {
  interface IStatusChip {
    value: string
    color: string
  }
  interface IChipData {
    name: string
    status: IStatusChip[]
  }

  const chipData: IChipData[] = [
    {
      name: 'paymentStatus', 
      status: [
        {
          value: 'paid',
          color: 'success'
        },
        {
          value: 'pending',
          color: 'warning'
        },
        {
          value: 'overdue',
          color: 'danger'
        }
      ]
    },
    {
      name: 'deliveryStatus', 
      status: [
        {
          value: 'ready',
          color: 'warning'
        },
        {
          value: 'late',
          color: 'danger'
        },
        {
          value: 'done',
          color: 'success'
        }
      ]
    }
  ]
  
  const [menuSelected, setMenu] = useState(0)

  const handleMenuChanges = (index: number) => () => setMenu(index)

  // const ChipDisplay = (value: string, column: string) => {
  //   const status: IStatusChip[] = chipData.find(chip => chip.name === column)?.status

  //   const statusColor = status.find(st => st.value === value) || 'info'

  //   return <Chip label={value} color={statusColor} sx={{ width: 80 }} />

  //   // {chipData.length > 0 && chipData.find(chip => chip.name === col.value) ? (
  //   //   <Chip label={row[col.value]} color={chipData.find(chip => chip.name === col.value)?.status} sx={{ width: 80 }} />
  //   // ) : (
  //   //   <Typography>
  //   //     {row[col.value]}
  //   //   </Typography>
  //   // )}
  // }

  return (
    <>
      {hasTab && tabMenus.length > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {tabMenus.map((tab, i) => (
            <Badge key={i} badgeContent={tab.newItemCount} color='error'>
              <Button onClick={handleMenuChanges(i)} variant={i === menuSelected ? 'contained' : 'outlined'} sx={{ backgroundColor: i === menuSelected ? '#689CCC' : '#fff', textTransform: 'none', width: 150, borderRadius: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                {tab.title}
              </Button>
            </Badge>
          ))}
        </Box>
      )}
      <TableContainer component={Paper} sx={{ borderRadius: '30px 30px 0px 0px' }}>
        <Box sx={{ width: '100%', p: 2.5, borderRadius: '30px 30px 0px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#689CCC' }}>
          <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
            <IconButton sx={{ mr: 2 }}>
              <FilterListIcon sx={{ color: '#fff' }} />
            </IconButton>
            <Input placeholder='Search' sx={{ p: 1, backgroundColor: '#fff', borderRadius: 1.5 }} />
          </Box>
          {hasCreate && (
            <Button sx={{ color: '#fff', backgroundColor: '#254AA5' }}>
              <AddIcon />
              Add {module}
            </Button>
          )}
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#689CCC' }}>
            <TableRow>
              {columnsData.map((col, i) => (
                <TableCell key={i} sx={{ color: '#fff' }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row, i) => (
              <TableRow
                key={i + 1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {/* {columnsData.map((col, ci) => (
                  <TableCell align='left' key={ci}>
                    <Typography>
                      {row[col.value]}
                    </Typography>
                  </TableCell>
                ))} */}
                <TableCell component="th" scope="row">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    #{i + 1}
                  </Typography>
                </TableCell>
                <TableCell align='left'>{`${row.customer} #${i + 1}`}</TableCell>
                <TableCell align="left">{`${row.store} #${i + 1}`}</TableCell>
                <TableCell align="left">
                  <Chip label={row.paymentStatus} color='success' sx={{ width: 80 }} />
                </TableCell>
                <TableCell align="left">
                  <Chip label={row.deliveryStatus} color='warning' sx={{ width: 80 }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomTable