// Made by Poukam Ngamaleu

import ContactUs from './contact'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { theme } from '../../utils/style/theme'
import { useTranslation } from 'react-i18next'
import logo from '../../asset/logoOnlinePreps.png'
import AboutUs from './About'

function Footer() {
  const { t } = useTranslation()

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      justifyContent="center"
      textAlign="center"
      bgcolor={theme.palette.primary.main}
      color={theme.palette.primary.light}
      p={12}
    >
      <Box>
        <Box>
          <Typography>{t('termToUse.title')}</Typography>
          <Typography>{t('termToUse.visible_part')}</Typography>
        </Box>
        <AboutUs />
        <Box>
          <Typography>{t('owner.title')}</Typography>
          <Typography>{t('owner.visible_part')}</Typography>
        </Box>
      </Box>
      <Box>
        <Box component="img" sx={{ width: 400 }} src={logo} alt="OnlinePreps" />
        <ContactUs />
        <Typography variant="h6">
          {`OnlinePreps@${new Date().getFullYear()}`}. {t('copyright')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
