// Made by Poukam Ngamaleu

import {
  Box,
  Fab,
  FormHelperText,
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

const Styledtextfield = styled(TextField)({
  '& .MuiFormControl-root': {
    paddingBottom: '10px',
  },
})

const StylePhoneNumber = styled(PhoneInput)({
  height: '60px',
  '& .PhoneInputCountrySelectArrow': {
    height: '0.5em',
  },
  '& .PhoneInputInput': {
    height: '85%',
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    overflow: 'hidden',
    opacity: '0.5',
    fontSize: '1rem',
  },
  '& .PhoneInputCountryIcon ': {
    height: '2rem',
    width: 'calc(2rem * 1.5 )',
  },
})
function FormInf() {
  const { handleSubmit, values, errors, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: {
        nom: '',
        email: '',
        phoneNumber: '',
      },
      onSubmit: (values, { resetForm }) => {
        Axios.post(`https://onlinepreps.herokuapp.com/api/insert`, {
          nom: values.nom,
          email: values.email,
          phoneNumber: values.phoneNumber,
        }).then(() => alert('Données enregistrées avec succès'))
        resetForm()
      },
      validationSchema: RegistrationForm,
    })

  const { t } = useTranslation()
  return (
    <fieldset>
      <legend>{t('notify')}</legend>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'grid',
          gap: '10px',
        }}
        data-netlify="true"
      >
        <Styledtextfield
          id="outlined-basic"
          label={t('name')}
          type="text"
          name="nom"
          onChange={handleChange}
          value={values.nom}
          variant="outlined"
          sx={{ width: '100%' }}
          {...(errors.nom && touched.nom
            ? { error: true, helperText: errors.nom }
            : '')}
        />
        <Styledtextfield
          id="outlined-basic2"
          label={t('email')}
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          variant="outlined"
          sx={{ width: '100%' }}
          {...(errors.email && touched.email
            ? { error: true, helperText: errors.email }
            : '')}
        />
        <StylePhoneNumber
          value={values.phoneNumber}
          onChange={(number) =>
            setFieldValue(`phoneNumber`, number?.toString())
          }
          placeholder={t('phone_number')}
        />
        {errors.phoneNumber && touched.phoneNumber ? (
          <FormHelperText error>{errors.phoneNumber}</FormHelperText>
        ) : (
          ''
        )}
        <Box display="flex" justifyContent="center" p={2}>
          <Fab
            variant="extended"
            aria-label="add"
            type="submit"
            sx={{ bgcolor: theme.palette.primary.light }}
          >
            <Typography variant="button" paddingLeft="5px">
              {t('btn_submit')}
            </Typography>
          </Fab>
        </Box>
      </Box>
    </fieldset>
  )
}

export default FormInf
