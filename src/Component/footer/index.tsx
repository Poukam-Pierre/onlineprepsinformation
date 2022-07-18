// Made by Poukam Ngamaleu

import ContactUs from './contact'
import AboutUs from './aboutUs'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { theme } from '../../utils/style/theme'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.contrastText,
        opacity: '0.7',
        color: 'white',
      }}
      p={3}
    >
      <Box
        display="flex"
        justifyContent="center"
        textAlign="center"
        sx={{ marginBottom: '20px' }}
      >
        <Typography variant="h4">
          Une solution qui nous fait gagner du temps
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', sm: 'grid' },
          gridAutoFlow: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: '60px',
        }}
      >
        {/* <AboutUs /> */}
        <ContactUs />
      </Box>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography variant="h6">
          Copyright {`OnlinePreps@${new Date().getFullYear()}`}. Tout droit
          reservé
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
