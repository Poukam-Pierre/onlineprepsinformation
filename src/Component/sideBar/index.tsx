// Made by Poukam Ngamaleu

import { Box, Button, Typography, Collapse } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SideInfos() {
  const { t } = useTranslation()
  const [objectifChecked, setobjectifChecked] = useState<boolean>(false)
  const [userChecked, setUserChecked] = useState<boolean>(false)
  const [functionChecked, setFunctionChecked] = useState<boolean>(false)
  const [termsChecked, setTermsChecked] = useState<boolean>(false)
  const [ownerChecked, setOwnerChecked] = useState<boolean>(false)
  const [visionChecked, setVisionChecked] = useState<boolean>(false)
  const [whyChecked, setWhyChecked] = useState<boolean>(false)

  function handleChangeObj() {
    setobjectifChecked((prev) => !prev)
  }
  function handleChangeUser() {
    setUserChecked((prev) => !prev)
  }
  function handleChangeFunct() {
    setFunctionChecked((prev) => !prev)
  }
  function handleChangeTerms() {
    setTermsChecked((prev) => !prev)
  }
  function handleChangeOwner() {
    setOwnerChecked((prev) => !prev)
  }
  function handleChangeVision() {
    setVisionChecked((prev) => !prev)
  }
  function handleChangeWhy() {
    setWhyChecked((prev) => !prev)
  }
  return (
    <Box flex={4} p={2}>
      <Box>
        <Box
          sx={{
            width: 'fit-content',
            display: 'grid',
            gridAutoFlow: 'column',
            columnGap: '40px',
            alignItems: 'center',
            borderBottom: '1px solid',
            cursor: 'pointer',
            borderColor: '#1976d2',
            marginBottom: '15px',
          }}
          onClick={handleChangeObj}
        >
          <Button>
            <Typography>{t('goals.title')}</Typography>
          </Button>
          <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
        </Box>
        <Typography textAlign="justify">{t('goals.visible_part')}</Typography>
        <Collapse in={objectifChecked}>
          <Box>
            <Typography textAlign="justify">
              {t('goals.hidden_part')}
            </Typography>
          </Box>
        </Collapse>
      </Box>
      <Box
        sx={{
          width: 'fit-content',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '40px',
          alignItems: 'center',
          borderBottom: '1px solid',
          cursor: 'pointer',
          borderColor: '#1976d2',
          marginBottom: '15px',
        }}
        onClick={handleChangeWhy}
      >
        <Button>
          <Typography>{t('why.title')}</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography textAlign="justify">{t('why.visible_part')}</Typography>
      <Collapse in={whyChecked}>
        <Box>
          <Typography textAlign="justify">{t('why.hidden_part1')}</Typography>
          <Typography textAlign="justify">{t('why.hidden_part2')}</Typography>
        </Box>
      </Collapse>
      <Box
        sx={{
          width: 'fit-content',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '40px',
          alignItems: 'center',
          borderBottom: '1px solid',
          cursor: 'pointer',
          borderColor: '#1976d2',
          marginBottom: '15px',
        }}
        onClick={handleChangeUser}
      >
        <Button>
          <Typography>{t('forWho.title')}</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography>{t('forWho.visible_part')}</Typography>
      <Collapse in={userChecked}>
        <Box>
          <Typography textAlign="justify" component={'span'}>
            <dl>
              <dt>
                <ul>
                  <li>
                    <strong>{t('forWho.hidden_part.title1')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>{t('forWho.hidden_part.hidden1_1')}</dd>
              <dd>{t('forWho.hidden_part.hidden1_2')}</dd>
              <dt>
                <ul>
                  <li>
                    <strong>{t('forWho.hidden_part.title2')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>{t('forWho.hidden_part.hidden2_1')}</dd>
              <dt>
                <ul>
                  <li>
                    <strong>{t('forWho.hidden_part.title3')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>{t('forWho.hidden_part.hidden3_1')}</dd>
            </dl>
          </Typography>
        </Box>
      </Collapse>
      <Box>
        <Box
          sx={{
            width: 'fit-content',
            display: 'grid',
            gridAutoFlow: 'column',
            columnGap: '40px',
            alignItems: 'center',
            borderBottom: '1px solid',
            cursor: 'pointer',
            borderColor: '#1976d2',
            marginBottom: '15px',
          }}
          onClick={handleChangeFunct}
        >
          <Button>
            <Typography>{t('howThisWork.title')}</Typography>
          </Button>
          <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
        </Box>
        <Typography textAlign="justify">
          {t('howThisWork.visible_part')}
        </Typography>
        <Collapse in={functionChecked}>
          <Box>
            <dl>
              <dt>
                <ul>
                  <li>
                    <strong>{t('howThisWork.hidden_part.title1')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>- {t('howThisWork.hidden_part.hidden1_1')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden1_2')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden1_3')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden1_4')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden1_5')}</dd>
              <dd>- Etc.</dd>
              <dt>
                <ul>
                  <li>
                    <strong>{t('howThisWork.hidden_part.title2')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>- {t('howThisWork.hidden_part.hidden1_1')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden2_2')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden2_3')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden2_4')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden2_5')}</dd>
              <dd>- Etc.</dd>
              <dt>
                <ul>
                  <li>
                    <strong>{t('howThisWork.hidden_part.title3')}</strong>
                  </li>
                </ul>
              </dt>
              <dd>- {t('howThisWork.hidden_part.hidden3_1')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden3_2')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden3_3')}</dd>
              <dd>- {t('howThisWork.hidden_part.hidden3_4')}</dd>
              <dd>- Etc.</dd>
            </dl>
          </Box>
        </Collapse>
      </Box>
      <Box
        sx={{
          width: 'fit-content',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '40px',
          alignItems: 'center',
          borderBottom: '1px solid',
          cursor: 'pointer',
          borderColor: '#1976d2',
          marginBottom: '15px',
        }}
        onClick={handleChangeTerms}
      >
        <Button>
          <Typography>{t('termToUse.title')}</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography textAlign="justify">{t('termToUse.visible_part')}</Typography>
      <Collapse in={termsChecked}>
        <Box>
          <Typography textAlign="justify">
            {t('termToUse.hidden_part')}
          </Typography>
        </Box>
      </Collapse>
      <Box
        sx={{
          width: 'fit-content',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '40px',
          alignItems: 'center',
          borderBottom: '1px solid',
          cursor: 'pointer',
          borderColor: '#1976d2',
          marginBottom: '15px',
        }}
        onClick={handleChangeOwner}
      >
        <Button>
          <Typography>{t('owner.title')}</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography>{t('owner.visible_part')}</Typography>
      <Collapse in={ownerChecked}>
        <Box>
          <Typography textAlign="justify">{t('owner.hidden_part')}</Typography>
        </Box>
      </Collapse>
      <Box
        sx={{
          width: 'fit-content',
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '40px',
          alignItems: 'center',
          borderBottom: '1px solid',
          cursor: 'pointer',
          borderColor: '#1976d2',
          marginBottom: '15px',
        }}
        onClick={handleChangeVision}
      >
        <Button>
          <Typography>Vision</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography textAlign="justify">{t('vision.visible_part')}</Typography>
      <Collapse in={visionChecked}>
        <Box>
          <Typography textAlign="justify">{t('owner.hidden_part')}</Typography>
        </Box>
      </Collapse>
    </Box>
  )
}

export default SideInfos
