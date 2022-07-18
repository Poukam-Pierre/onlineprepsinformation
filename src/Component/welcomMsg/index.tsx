// Made by Poukam Ngamaleu

import Paper from '@mui/material/Paper';
import {Box, Typography} from '@mui/material'
import logo from '../../asset/logoOnlinePrepsInfo.PNG'



function WelcomMsg() {
    return ( 
        <Box p={4} display='flex' flexDirection='row' justifyContent='center'>
            <Paper>
                <Typography variant='h5' fontWeight='bold' marginLeft='15px'>Bienvenue dans l'environnement descriptif du projet </Typography>
                <Box
                    component="img"
                    sx={{ maxWidth: '100%' }}
                    src={logo}
                    alt="OnlinePreps"
                />
            </Paper>
        </Box>
     );
}

export default WelcomMsg;

