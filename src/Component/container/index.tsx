// Made by Poukam Ngamaleu

import { Stack } from '@mui/material'
import RightBarInfos from '../rightBar'
import SideInfos from '../sideBar'

function Containers() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      justifyContent="space-between"
    >
      <SideInfos />
      <RightBarInfos />
    </Stack>
  )
}

export default Containers
