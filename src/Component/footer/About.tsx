///  Made by Poukam ngamaleu

import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography variant="h6">{t('about.title')}</Typography>
      <List>
        <ListItem sx={{ padding: 0 }}>
          <ListItemText
            primary={t('about.company')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemText
            primary={t('about.support')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemText
            primary={t('about.sale')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem sx={{ padding: 0 }}>
          <ListItemText
            primary={t('about.privacy')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default AboutUs
