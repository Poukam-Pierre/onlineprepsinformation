// Made by Poukam Ngamaleu

import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { theme } from '../../utils/style/theme'
import car_image from '../../asset/car_image.svg'

function WelcomMsg() {
  const { t } = useTranslation()
  return (
    <Box
      p={2}
      sx={{ display: { xs: 'initial', md: 'grid' } }}
      gridTemplateColumns="1fr 2fr"
    >
      <Box display="grid" gridTemplateRows="1fr 1.2fr" gap="40px">
        <Box>
          <Typography
            variant="h2"
            fontFamily="Open Sans"
            color={theme.palette.primary.light}
            fontWeight="600"
            sx={{ fontSize: { xs: '25px', sm: '45px' } }}
          >
            {t('welcome_to_onlinepreps')}
          </Typography>
          <Typography
            variant="h3"
            fontFamily="Open Sans"
            fontWeight="600"
            sx={{ fontSize: { xs: '25px', sm: '45px' } }}
          >
            <strong style={{ color: 'yellow' }}>Online</strong>
            <strong style={{ color: '#2092BA' }}>Preps...</strong>
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '12px', sm: '20px' } }}
          color={theme.palette.primary.light}
        >
          {t('welcom_message')}
        </Typography>
      </Box>
      <Box
        component="img"
        src={car_image}
        alt="car_image"
        sx={{
          justifySelf: 'center',
          alignSelf: 'self-end',
          display: { xs: 'none', md: 'initial' },
        }}
      />
    </Box>
  )
}

export default WelcomMsg
