//  Made by Poukam ngamaleu

import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded'
import MailRoundedIcon from '@mui/icons-material/MailRounded'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material'
import { theme } from '../../utils/style/theme'

interface contactInformations {
  icon: JSX.Element
  contactInf: string
}

const contacts: contactInformations[] = [
  {
    icon: <PhoneRoundedIcon />,
    contactInf: '+237 680 090 489',
  },
  // {
  //   icon: <FacebookRoundedIcon />,
  //   contactInf: 'PoukamRadioTech',
  // },
  {
    icon: <WhatsappRoundedIcon />,
    contactInf: '+237 696 841 451',
  },
  // {
  //   icon: <MailRoundedIcon />,
  //   contactInf: 'ngamaleu2011@gmail.com',
  // },
]

function ContactUs() {
  return (
    <List
      sx={{
        paddingTop: 0,
        paddingBottom: 0,
        justifySelf: 'center',
      }}
    >
      {contacts.map((contact, index) => (
        <ListItem key={`${index}`} sx={{ padding: 0 }}>
          <ListItemIcon sx={{ color: theme.palette.secondary.contrastText }}>
            {contact.icon}
          </ListItemIcon>
          <ListItemText
            primary={contact.contactInf}
            primaryTypographyProps={{ fontSize: '18px' }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default ContactUs
