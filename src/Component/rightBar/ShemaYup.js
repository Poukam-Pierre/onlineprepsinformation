// Made by Poukam Ngamaleu

import * as yup from 'yup'

export const RegistrationForm = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(12, 'error number')
    .required('numéro obligatoire'),
})
