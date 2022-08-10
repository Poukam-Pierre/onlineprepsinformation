// Made by Poukam Ngamaleu

import {
  Alert,
  Box,
  Fab,
  FormHelperText,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import PhoneInput from 'react-phone-number-input'
import { useFormik } from 'formik'
import { RegistrationForm } from './ShemaYup'
import 'react-phone-number-input/style.css'
import { useTranslation } from 'react-i18next'
import { theme } from '../../utils/style/theme'
import Axios from 'axios'
import ClockTimer from '../rightBar'
import { useState } from 'react'

const StyledFab = styled(Fab)({
  '&.MuiButtonBase-root': {
    borderRadius: '15px',
  },
})

const StylePhoneNumber = styled(PhoneInput)({
  height: '60px',
  '& .PhoneInputCountrySelectArrow': {
    height: '0.5em',
  },

  '& .PhoneInputCountry': {
    display: 'none',
  },
  '& .PhoneInputCountryIcon ': {
    height: '2rem',
    width: 'calc(2rem * 1.5 )',
  },
})
function FormInf() {
  const [open, setOpen] = useState<boolean>(false)

  const { handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: (values, { resetForm }) => {
      Axios.post(`https://onlinepreps.herokuapp.com/api/insert`, {
        phoneNumber: values.phoneNumber,
      }).then(() => setOpen(true))
      resetForm()
    },
    validationSchema: RegistrationForm,
  })

  const { t } = useTranslation()
  return (
    <Box
      sx={{ display: { xs: 'flex', sm: 'grid' }, gap: { xs: '30px', sm: 0 } }}
      flexDirection="column"
    >
      <Box display="grid" gap="30px">
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: '16px', sm: '25px' } }}
          fontWeight="600"
          color={theme.palette.primary.light}
        >
          {t('notify')}
        </Typography>
        <Box
          component="form"
          display="flex"
          sx={{
            display: { xs: 'grid', sm: 'flex' },
            gap: { xs: 2, sm: '30px' },
          }}
          flexDirection="row"
          alignItems="center"
          onSubmit={handleSubmit}
        >
          <StylePhoneNumber
            value={values.phoneNumber}
            onChange={(number) =>
              setFieldValue(`phoneNumber`, number?.toString())
            }
            placeholder={t('phone_number')}
            sx={{
              '& .PhoneInputInput': {
                height: '85%',
                backgroundColor: theme.palette.primary.light,
                borderColor: '#000',
                borderRadius: '15px',
                borderStyle: 'solid',
                borderWidth: '1px',
                overflow: 'hidden',
                fontSize: '1rem',
                width: { xs: 'auto', sm: '25rem' },
                textAlign: 'center',
              },
            }}
          />
          {errors.phoneNumber && touched.phoneNumber ? (
            <FormHelperText error>{errors.phoneNumber}</FormHelperText>
          ) : (
            ''
          )}
          <Box display="flex" justifyContent="center">
            <StyledFab
              variant="extended"
              aria-label="add"
              type="submit"
              sx={{
                bgcolor: theme.palette.secondary.main,
                '&.MuiButtonBase-root': { width: { xs: '9rem', md: '13rem' } },
              }}
            >
              <Typography
                variant="button"
                paddingLeft="5px"
                color={theme.palette.primary.light}
              >
                {t('btn_submit')}
              </Typography>
            </StyledFab>
          </Box>
        </Box>
      </Box>
      <Box
        justifySelf="end"
        sx={{
          display: { xs: 'grid', sm: 'initial' },
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '15px', sm: '20px' },
            textAlign: { xs: 'center', sm: 'initial' },
          }}
          fontFamily="inter"
          color={theme.palette.secondary.light}
        >
          {t('death_time')}
        </Typography>
        <ClockTimer />
      </Box>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default FormInf
