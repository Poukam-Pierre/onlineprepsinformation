//  Made by Poukam Ngamaleu
import { Box } from '@mui/material'
import { Fragment } from 'react'
import './Clock.css'
import { Paper } from '@mui/material'

function Clock({ timerDays, timerHours, timerMinutes, timerSeconds, t }) {
  return (
    <Box className="container">
      <Fragment>
        <section className="timer-container">
          <section className="timer">
            <div className="clock">
              <section>
                <p>{timerDays}</p>
                <small>{t('days')}</small>
              </section>
              <section>
                <p>{timerHours}</p>
                <small>{t('hours')}</small>
              </section>
              <section>
                <p>{timerMinutes}</p>
                <small>{t('minutes')}</small>
              </section>
              <section>
                <p>{timerSeconds}</p>
                <small>{t('seconds')}</small>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    </Box>
  )
}
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
}
export default Clock
