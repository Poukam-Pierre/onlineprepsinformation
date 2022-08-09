///  Made by Poukam ngamaleu

import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { theme } from '../../utils/style/theme'
import { useTranslation } from 'react-i18next'

function AboutUs() {
  const { t } = useTranslation()

  return (
    <>
      <Typography>{t('about.title')}</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary={t('about.company')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('about.support')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('about.sale')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={t('about.privacy')}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
      </List>
    </>
  )
}

export default AboutUs
