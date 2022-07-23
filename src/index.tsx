// Made by Poukam

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

const GlobalStyled = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
  margin:0;
  background-color: #FAF4F4;
}
`
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['fr', 'en'],
    fallbackLng: 'fr',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 's ubdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  })

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
