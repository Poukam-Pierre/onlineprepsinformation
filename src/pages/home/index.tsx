// Made by Poukam Ngamaleu

import WelcomMsg from '../../Component/welcomMsg'
import { Box } from '@mui/material'
import FormInf from '../../Component/rightBar/personalInf'
import Containers from '../../Component/container'

function Home() {
  return (
    <Box sx={{ padding: { xs: 3, md: 10 } }}>
      <WelcomMsg />
      <FormInf />
      <Containers />
    </Box>
  )
}

export default Home
