// Made by Poukam Ngamaleu

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next'
import { theme } from '../../utils/style/theme'
import './index.css'

function Containers() {
  const { t } = useTranslation()
  return (
    <Box>
      <Box display="grid" gap="4rem">
        <Typography
          variant="h1"
          fontSize="60px"
          fontWeight="700"
          fontFamily="Open Sans"
          color={theme.palette.primary.light}
        >
          {t('fonctionning').toUpperCase()}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Box
            sx={{
              bgcolor: theme.palette.secondary.light,
              width: '27rem',
              p: 3,
              borderRadius: '25px',
            }}
          >
            <Typography variant="body2" fontSize="17px">
              {t('goals.visible_part')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>hello</Box>

        <div className="steps-items">
          <div className="steps"></div>
          <span className="separator"></span>
          <div className="steps"></div>
          <span className="separator"></span>
          <div className="steps"></div>
          <span className="separator"></span>
          <div className="steps"></div>
        </div>
      </Box>
    </Box>
  )
}

export default Containers
