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
      color={theme.palette.secondary.light}
      padding="96px 96px 20px"
    >
      <Box
        textAlign="initial"
        sx={{
          display: 'grid',
          gap: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'fit-content',
        }}
      >
        <Box>
          <Typography variant="h6">{t('termToUse.title')}</Typography>
          <Typography>{t('termToUse.visible_part')}</Typography>
        </Box>
        <AboutUs />
        <Box>
          <Typography variant="h6">{t('owner.title')}</Typography>
          <Typography>{t('owner.visible_part')}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gap: '150px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          sx={{ width: 200, justifySelf: 'center' }}
          src={logo}
          alt="OnlinePreps"
        />
        <ContactUs />
        <Typography variant="caption" fontSize="20px" fontWeight="600">
          {`OnlinePreps@${new Date().getFullYear()}`}. {t('copyright')}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
