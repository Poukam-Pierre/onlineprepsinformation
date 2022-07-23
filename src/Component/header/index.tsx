// Made by Poukam Ngamaleu

import { Box } from '@mui/system'
import {
  AppBar,
  Button,
  FormControlLabel,
  styled,
  Switch,
  Toolbar,
} from '@mui/material'
import { theme } from '../../utils/style/theme'
import logo from '../../asset/logo.PNG'
import { useState } from 'react'
import i18next from 'i18next'

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StyledInscriptionButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
}))

function Header() {
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem('systemLanguage') === 'en' ? true : false
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
    if (event.target.checked) {
      localStorage.setItem('systemLanguage', 'en')
      i18next.changeLanguage('en')
    } else {
      localStorage.setItem('systemLanguage', 'fr')
      i18next.changeLanguage('fr')
    }
  }

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <StyledToolbar>
        <Box
          component="img"
          sx={{ maxWidth: 65 }}
          src={logo}
          alt="OnlinePreps"
        />
        <Box>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={checked ? 'en' : 'fr'}
          />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
