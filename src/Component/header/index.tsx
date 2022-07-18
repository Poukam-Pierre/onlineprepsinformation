// Made by Poukam Ngamaleu

import { Box } from '@mui/system'
import {
  AppBar,
  Button,
  styled,
  Toolbar,
} from '@mui/material'
import { theme } from '../../utils/style/theme'
import logo from '../../asset/logo.PNG'

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StyledInscriptionButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
}))

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <StyledToolbar>
        <Box >
          <Box
            component="img"
            sx={{ maxWidth: 65 }}
            src={logo}
            alt="OnlinePreps"
          />
        </Box>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
