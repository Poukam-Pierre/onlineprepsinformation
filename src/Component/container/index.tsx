// Made by Poukam Ngamaleu

import { styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next'
import { theme } from '../../utils/style/theme'
import './index.css'
import learner_img from '../../asset/learner.svg'
import admin_img from '../../asset/administrator.svg'
import partner_img from '../../asset/partner.svg'

const StyledBox = styled(Box)({
  display: 'grid',
  gap: '70px',
  color: theme.palette.primary.light,
})
const StyledBox1 = styled(Box)({
  display: 'grid',
  gap: '25px',
})

function Containers() {
  const { t } = useTranslation()
  return (
    <Box>
      <Box display="grid" gap="4rem">
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '30px', sm: '60px' } }}
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
              width: { xs: 'auto', sm: '27rem' },
              p: 3,
              borderRadius: '25px',
              position: 'relative',
            }}
          >
            <Box
              component="span"
              sx={{
                position: 'absolute',
                fontSize: '4rem',
                fontWeight: 'bold',
                letterSpacing: '-2px',
                borderRadius: '50%',
                height: '41px',
                width: '37px',
                bgcolor: theme.palette.secondary.light,
                top: '-18px',
                left: '39px',
              }}
            >
              ʻʻ
            </Box>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: '11px', sm: '17px' } }}
            >
              {t('goals.visible_part')}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          margin: 0,
          padding: '50px 0 50px 0',
          boxSizing: 'border-box',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: { xs: '93%', md: '95%' },
            width: '4px',
            bgcolor: theme.palette.primary.light,
            left: { xs: 'auto', md: '50%' },
            transform: 'translateX(-50%)',
            top: { xs: '68px', md: '67px' },
          }}
        ></Box>
        <Box
          display="flex"
          gap="10rem"
          sx={{
            textAlign: { sx: 'inherit', md: 'end' },
            paddingLeft: { xs: 3, md: 'initial' },
          }}
        >
          <StyledBox sx={{ width: { xs: 'inherit', md: 'calc(50% - 40px)' } }}>
            <Box
              className="title title1"
              sx={{
                display: { xs: 'flex', md: 'initial' },
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: '15px', sm: '40px' } }}
                fontWeight="600"
              >
                {t('howThisWork.hidden_part.title1')}
              </Typography>
              <Box
                component="img"
                src={learner_img}
                alt="car_image"
                sx={{
                  display: { xs: 'initial', md: 'none' },
                  width: { xs: 70, md: 'initial' },
                }}
              />
            </Box>
            <StyledBox1>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden1_4')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden1_3')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden1_2')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden1_1')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden1_5')}
                </Typography>
              </li>
            </StyledBox1>
          </StyledBox>
          <Box
            component="img"
            src={learner_img}
            alt="car_image"
            sx={{ alignSelf: 'center', display: { xs: 'none', md: 'initial' } }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          padding="50px 0 50px 0"
          gap="10rem"
          sx={{ paddingLeft: { xs: 3, md: 'initial' } }}
        >
          <Box
            component="img"
            src={partner_img}
            alt="car_image"
            sx={{ alignSelf: 'center', display: { xs: 'none', md: 'initial' } }}
          />
          <StyledBox sx={{ width: { xs: 'inherit', md: 'calc(50% - 40px)' } }}>
            <Box
              className="title title2"
              sx={{
                display: { xs: 'flex', md: 'initial' },
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{ fontSize: { xs: '15px', sm: '40px' } }}
              >
                {t('howThisWork.hidden_part.title2')}
              </Typography>
              <Box
                component="img"
                src={partner_img}
                alt="car_image"
                sx={{
                  display: { xs: 'initial', md: 'none' },
                  width: { xs: 70, md: 'initial' },
                }}
              />
            </Box>
            <StyledBox1>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden2_4')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden2_3')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden2_2')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden2_5')}
                </Typography>
              </li>
            </StyledBox1>
          </StyledBox>
        </Box>
        <Box
          display="flex"
          gap="10rem"
          sx={{
            textAlign: { sx: 'inherit', md: 'end' },
            paddingLeft: { xs: 3, md: 'initial' },
          }}
        >
          <StyledBox sx={{ width: { xs: '80rem', md: 'calc(50% - 40px)' } }}>
            <Box
              className="title title3"
              sx={{
                display: { xs: 'flex', md: 'initial' },
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h4"
                fontWeight="600"
                sx={{ fontSize: { xs: '15px', sm: '40px' } }}
              >
                {t('howThisWork.hidden_part.title3')}
              </Typography>
              <Box
                component="img"
                src={admin_img}
                alt="car_image"
                sx={{
                  display: { xs: 'initial', md: 'none' },
                  width: { xs: 70, md: 'initial' },
                }}
              />
            </Box>
            <StyledBox1>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden3_1')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden3_4')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden3_3')}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t('howThisWork.hidden_part.hidden3_2')}
                </Typography>
              </li>
            </StyledBox1>
          </StyledBox>
          <Box
            component="img"
            src={admin_img}
            alt="car_image"
            sx={{ alignSelf: 'center', display: { xs: 'none', md: 'initial' } }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Containers
