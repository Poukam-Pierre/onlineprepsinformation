// Made by Poukam Ngamaleu

import { Box } from '@mui/system'
import Clock from './Clock'
import { useState, useEffect } from 'react'
import './Clock.css'
import { Typography } from '@mui/material'
import FormInf from './personalInf'

function RightBarInfos() {
  const [timerDays, setTimerDay] = useState<number>()
  const [timerHours, setTimerHours] = useState<number>()
  const [timerMinutes, setTimerMinutes] = useState<number>()
  const [timerSeconds, setTimerSecond] = useState<number>()

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
    <Box
      flex={2}
      p={2}
      textAlign="center"
      sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
    >
      <Box>
        <Typography sx={{ padding: '30px', fontWeight: 'bold' }} variant="h5">
          TEMPS DE MIS EN OEUVRE
        </Typography>
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </Box>
      <Box>
        <FormInf />
      </Box>
    </Box>
  )
}

export default RightBarInfos
