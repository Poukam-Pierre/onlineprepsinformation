// Made by Poukam Ngamaleu

import * as yup from 'yup'

export const RegistrationForm = yup.object().shape({
  phoneNumber: yup.number().required('numéro obligatoire'),
})
