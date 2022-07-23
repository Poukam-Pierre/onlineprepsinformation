// Made by Poukam Ngamaleu

import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'
import logo from '../../asset/logoOnlinePrepsInfo.PNG'
import { useTranslation } from 'react-i18next'

function WelcomMsg() {
  const { t } = useTranslation()
  return (
    <Box p={4} display="flex" flexDirection="row" justifyContent="center">
      <Paper>
        <Typography variant="h5" fontWeight="bold" marginLeft="15px">
          {t('welcome_to_onlinepreps')}
        </Typography>
        <Box
          component="img"
          sx={{ maxWidth: '100%' }}
          src={logo}
          alt="OnlinePreps"
        />
      </Paper>
    </Box>
  )
}

export default WelcomMsg
