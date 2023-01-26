import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Button,
  Card,
  Divider
} from '@mui/material'
import Content from '../components/Content'

const Profile:React.FC = () => {

  const responseData = {
    merchantName: 'Silicon Valley',
    categories: 'Electronics, Gadgets',
    info: {
      fullName: 'John Isaac Caasi',
      contactNumber: '+63777240159',
      email: 'noerase12@gmail.com'
    },
    businessInfo: {
      name: 'Flora Vida by Marian',
      description: 'We offer flowers personally arranged by Marian Hassan',
      fbAccount: 'John Isaac',
      igAccount: 'John Isaac',
      delivers: 'Yes'
    },
    address: 'West High Court Road, Rasta Nagpur, Maharashtra, India',
    documents: {
      validId1: true,
      validId2: true,
      registration: true,
      birCert: true,
      mayorPermit: true,
      businessPermit: true
    }
  }

  const metaData = {
    merchantInfoLabels: [
      'Full Name',
      'Contact Number',
      'Email Address'
    ],
    businessInfoLabels: [
      'Business Name',
      'Business Description',
      'Facebook Account',
      'Instagram Account',
      'Delivers?'
    ],
    documentsLabels: [
      'Valid ID',
      'Valid ID',
      'DTI Registration or SEC Certificate Partnership',
      'Partnership Resolution or Secretary\'s Certificate',
      'BIR Certificate of Registration',
      'Mayor\'s Permit',
      'Business\'s Permit'
    ]
  }

  return (
    <>
      <Content title='My Profile' hasBack>
        <Box sx={{
          mt: 2,
          backgroundColor: '#E6F3FF',
          p: 2,
          borderRadius: 2
        }}>
          <Typography sx={{ color: '#254AA5', fontSize: '24px', fontWeight: '700' }}>
            {responseData.merchantName}
          </Typography>
          <Typography sx={{ color: '#676767', fontSize: '20px', fontWeight: '600' }}>
            {responseData.categories}
          </Typography>
        </Box>
        <Box sx={{
          mt: 3
        }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Box sx={logoStyle} />
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant='contained' sx={editBtnStyle}>
                  Edit Logo
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Card sx={{ mb: 2, p: 2 }}>
                <Typography sx={cardTitleStyle}>
                  Merchant Information
                </Typography>
                <Divider />
                <Box sx={{ my: 2 }}>
                  {metaData.merchantInfoLabels.map((item, i) => (
                    <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#808080' }}>
                      {item}:
                    </Typography>
                    <Typography>
                      {[...Object.values(responseData.info)][i]}
                    </Typography>
                  </Box>
                  ))}
                </Box>
              </Card>
              <Card sx={{ mb: 2, p: 2 }}>
                <Typography sx={cardTitleStyle}>
                  Business Information
                </Typography>
                <Divider />
                <Box sx={{ my: 2 }}>
                  {metaData.businessInfoLabels.map((item, i) => (
                    <Box sx={{ my: 1, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#808080' }}>
                      {item}:
                    </Typography>
                    <Typography sx={{ width: '50%', textAlign: 'end' }}>
                      {[...Object.values(responseData.businessInfo)][i]}
                    </Typography>
                  </Box>
                  ))}
                </Box>
              </Card>
              <Card sx={{ mb: 2, p: 2 }}>
                <Typography sx={cardTitleStyle}>
                  Business Address
                </Typography>
                <Divider />
                <Box sx={{ mt: 2 }}>
                  <Typography>
                    {responseData.address}
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ p: 2 }}>
                <Typography sx={cardTitleStyle}>
                  Uploaded Documents
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {metaData.documentsLabels.map((item, i) => (
                    <Box sx={{ my: 1.5, display: 'flex', justifyContent: 'space-between', borderRadius: '10px', border: '1px solid #cdcdcd' }}>
                      <Typography sx={{ fontSize: item.length > 25 ? '12px' : '18px', width: '70%', py: 1, px: 2 }}>
                        {item}
                      </Typography>
                      <Button variant='contained' sx={{ backgroundColor: '#607AAB', textTransform: 'none', width: 90 }}>
                        <Typography>
                          View
                        </Typography>
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Card>
              <Card sx={{ p: 2, mt: 2 }}>
                <Typography sx={cardTitleStyle}>
                  Other App Settings
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around' }}>
                  <Button variant='contained' sx={{ width: '45%', backgroundColor: '#689CCC' }}>
                    Update
                  </Button>
                  <Button variant='contained' sx={{ width:' 45%', '&:hover': { backgroundColor: '#a35353' }, backgroundColor: '#CC6868' }}>
                    Delete
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </>
  )
}

const logoStyle = {
  width: 250,
  height: 250,
  borderRadius: 100,
  backgroundColor: '#D9D9D9'
}

const editBtnStyle = {
  textTransform: 'none',
  color: '#fff',
  fontSize: '20px',
  fontWeight: '700',
  mt: 3,
  backgroundColor: '#689CCC',
  borderRadius: 2
}

const cardTitleStyle = {
  color: '#254AA5',
  fontWeight: '500',
  fontSize: '20px'
}

export default Profile