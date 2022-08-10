// Made by Poukam Ngamaleu

import * as yup from 'yup'

export const RegistrationForm = yup.object().shape({
  phoneNumber: yup
    .number()
    .min(11, 'error number')
    .max(12, 'error number')
    .required('numéro obligatoire'),
})
