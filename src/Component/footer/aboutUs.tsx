// Made by Poukam Ngamaleu

import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Switch,
  } from '@mui/material'
  import { Box } from '@mui/system'
  
  function AboutUs() {
    return (
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Conditions et termes"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Qui sommes nous?"
                primaryTypographyProps={{ fontSize: '18px' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Switch edge="start" />
            <ListItemText primary="Français" />
          </ListItem>
          <ListItem>
            <Switch edge="start" />
            <ListItemText primary="Lumière" />
          </ListItem>
        </List>
      </Box>
    )
  }
  
  export default AboutUs
  