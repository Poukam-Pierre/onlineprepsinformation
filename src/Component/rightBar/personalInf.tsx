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
// import { con } from '../connexion'

interface PersolInf {
  nom: string
  email: string
  phoneNumber: string
}
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
    useFormik<PersolInf>({
      initialValues: {
        nom: '',
        email: '',
        phoneNumber: '',
      },
      onSubmit: (values, { resetForm }) => {
        // con.connect(function (err: any) {
        //   if (err) throw err
        //   alert('Echec de sauvegarde de données personnelles')
        //   var sql =
        //     'INSERT INTO internautes(user_name, email, phone_number) VALUES(`{values.name}`, `{values.email}`, `{values.phone}`)'
        //   con.query(sql, function (err: any, result: any) {
        //     if (err) throw err
        //     alert('Données sauvégardées avec succès')
        //   })
        // })
        // console.log(values)
        resetForm()
      },
      validationSchema: RegistrationForm,
    })

  const { t } = useTranslation()
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'grid', gap: '10ps' }}
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
        onChange={(number) => setFieldValue(`phoneNumber`, number?.toString())}
        placeholder={t('phone_number')}
      />
      {errors.phoneNumber && touched.phoneNumber ? (
        <FormHelperText error>{errors.phoneNumber}</FormHelperText>
      ) : (
        ''
      )}
      <Box display="flex" justifyContent="center" p={2}>
        <Fab variant="extended" aria-label="add" type="submit">
          <Typography variant="button" paddingLeft="5px">
            {t('btn_submit')}
          </Typography>
        </Fab>
      </Box>
    </Box>
  )
}

// var sql ="INSERT INTO internautes(user_name, email, phone_number) VALUES(`{values.name}`, `{values.email}`, `{values.phone}`)"

export default FormInf
