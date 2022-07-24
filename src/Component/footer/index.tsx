// Made by Poukam Ngamaleu

import ContactUs from './contact'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { theme } from '../../utils/style/theme'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.contrastText,
          opacity: '0.7',
          color: 'white',
        }}
      >
        <Box display="flex" justifyContent="center" textAlign="center">
          <Typography variant="h4">{t('tagline')}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.contrastText,
          opacity: '0.9',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', sm: 'grid' },
            gridAutoFlow: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 0 0 8px',
          }}
        >
          <Box display="flex" justifyContent="center" textAlign="center">
            <Typography variant="h6">
              {`OnlinePreps@${new Date().getFullYear()}`}. {t('copyright')}
            </Typography>
          </Box>
          <ContactUs />
        </Box>
      </Box>
    </>
  )
}

export default Footer
