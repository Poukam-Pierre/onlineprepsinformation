// Made by Poukam Ngamaleu

import * as yup from 'yup'

export const RegistrationForm = yup.object().shape({
  nom: yup.string().required('Nom obligatoire'),
  email: yup
    .string()
    .email('Entrer une email valide')
    .required('Email obligatoire'),
  phoneNumber: yup.number().required('numéro obligatoire'),
})
