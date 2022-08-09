// Made by Poukam Ngamaleu

import { Box } from '@mui/system'
import Clock from './Clock'
import { useState, useEffect } from 'react'
import './Clock.css'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function ClockTimer() {
  const [timerDays, setTimerDay] = useState<number>()
  const [timerHours, setTimerHours] = useState<number>()
  const [timerMinutes, setTimerMinutes] = useState<number>()
  const [timerSeconds, setTimerSecond] = useState<number>()

  const { t } = useTranslation()

  let interval: any

  const startTimer = () => {
    const countDownDate = new Date('december 30, 2022').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        //Stop timer

        clearInterval(interval.current)
      } else {
        //Update timer
        setTimerDay(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSecond(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })
  return (
    <Box p={2}>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        t={t}
      />
    </Box>
  )
}

export default ClockTimer
