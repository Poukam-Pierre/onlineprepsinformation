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
        onClick={handleChangeUser}
      >
        <Button>
          <Typography>Utilisateurs de la plateforme</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography>
        Est appelé utilisateur toute personne s'étant incrit et reconnaissable
        de celle ci
      </Typography>
      <Collapse in={userChecked}>
        <Box>
          <Typography textAlign="justify" component={'span'}>
            <strong>OnlinePreps</strong> ouvre ses portes à deux types
            d'utilisateurs:
            <dl>
              <dt>
                <strong>Les apprenants</strong>
              </dt>
              <dd>
                Il s'agit ici des personnes postulant pour un permis de
                conduire. Ces personnes veulent s'exercer sur les anciennes
                épreuves nationales du permis de conduire selon l'année, le
                département, la session d'examen ou alors la catégorie du
                permis.
              </dd>
              <dt>
                <strong>Les partenaires</strong>
              </dt>
              <dd>
                Il s'agit ici de toutes personnes désirant travailler sur le
                projet.Un partenaire peut être une auto-école désirant utiliser
                notre solution pour suivre et augmenter les compétences de ses
                candidats. Un partenaire peut être également une personne
                physique tierce qui possède les épreuves nationales et veux
                faire un deal avec nous.
              </dd>
            </dl>
          </Typography>
          <Typography textAlign="justify">
            Dans les deux cas, une entente est faite entre nous et les
            différents utilisateurs "soit via la plateforme pour le cas des
            apprenants soit par appelle" selon une close préétablie
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
            <Typography>Fonctionnalités</Typography>
          </Button>
          <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
        </Box>
        <Typography textAlign="justify">
          Les différentes actions possible que peuvent faire les utilisateurs de
          la plateforme ont été pensées pour le projet
          <strong>
            Online Preps. Bien que nous restons ouvert pour toutes suggestions
          </strong>
          , l'école en ligne prévoie un éventaille de possibilités; de
          l'apprenant qui peut se payer un ou plusieurs type d'abonnement, au
          partenaire qui peux voir le solde de son compte Preps en passant par
          la possibilité de l'apprenant à composer une épreuve, celui d'un
          partenaire à faire une action de virement dans son compte mobile
          Money.
        </Typography>
        <Collapse in={functionChecked}>
          <Box>
            <Typography textAlign="justify">
              <strong>OnlinePreps</strong> donne la possibilité selon le type
              d'utilisateur de réaliser bon nombre de tâches.
            </Typography>
            <dl>
              <dt>
                <strong>Pour un apprenant</strong>
              </dt>
              <dd>- Pouvoir s'inscrire sur la plateforme</dd>
              <dd>
                - Pouvoir se payer des abonnements selon la catégorie du permis
                pour une durée de 02 mois
              </dd>
              <dd>
                - Être capable de composer une épreuve de son choix selon la
                catégorie du permis choisi lors de l'achat de l'abonnement
              </dd>
              <dd>
                - Pouvoir rechercher une épreuve selon l'année, la catégorie, la
                session d'examen mais aussi le département
              </dd>
              <dd>
                - Pouvoir s'auto-évaluer grâce à plusieurs outils d'évaluation
                de compétences disponible sur la plateforme
              </dd>
              <dd>- Vendre les épreuves d'examen national</dd>
              <dd>- Pouvoir supprimer son compte</dd>
              <dd>- Etc ...</dd>
              <dt>
                <strong>Pour un partenaire</strong>
              </dt>
              <ul>
                <li>
                  Une personne désireuse de vendre les épreuves d'examen en sa
                  possession
                </li>
                <dd>- Vendre les épreuves d'examen national</dd>
                <dd>- Nous contacter</dd>
                <li>Une auto-école ou personne morale</li>
                <dd>- Accéder au nombre d'inscrit sous sa bannière</dd>
                <dd>- Accéder au récapitulatif de leur progression</dd>
                <dd>
                  - Accéder à son compte monétaire dû à chaque inscription sous
                  sa bannière
                </dd>
                <dd>
                  - pouvoir effectuer des transactions monétaires "Retire de
                  l'argent" de son compte Preps
                </dd>
              </ul>
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
          <Typography>Condition d'utilisation</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography textAlign="justify">
        Les termes et conditions sont en cours d'édition. Mais nous mettrons un
        accent particulier sur la sécurité de la plateforme par rapport à vos
        données et d'utilisation.
      </Typography>
      <Collapse in={termsChecked}>
        <Box>
          <Typography textAlign="justify">
            <strong>OnlinePreps</strong> est un projet propriétaire. Pour cela
            nous nous engageons à fournir dans le strict respect des
            réglementations en vigueur les différents services proposés.Nous
            comptons enrichir d'avantages nos conditions d'utilisations afin de
            protéger tous les utilisateurs de la plateforme.
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
          <Typography>Société propriétaire</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography>
        <strong>GLOM SARL & SARL Poukam Radio Tech</strong>
      </Typography>
      <Collapse in={ownerChecked}>
        <Box>
          <Typography textAlign="justify">
            <strong>OnlinePreps</strong> est une initiative de la SARL{' '}
            <strong>Poukam Radio Tech</strong> dans le but de rendre accessible
            l'éducation à tous, en tout temps et en tous lieux. Il s'inscrit
            dans le cadre de plusieurs résolutions nationales dont l'un est
            l'insertion au numérique. Soucieux d'accroitre les compétences dans
            le secteur des transports, nous proposons cette solution assurant un
            meilleur suivie théorique des auto-écoles mais aussi proposant des
            réponses et des explications certifiées.
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
        onClick={handleChangeVision}
      >
        <Button>
          <Typography>Vision</Typography>
        </Button>
        <ArrowDropDownIcon sx={{ fontSize: '1.8rem' }} />
      </Box>
      <Typography textAlign="justify">
        Faire de <strong>Online Preps</strong> une école complète de formation
        en ligne en conduite automobile.
      </Typography>
      <Collapse in={visionChecked}>
        <Box>
          <Typography textAlign="justify">
            <strong>Poukam Radio Tech</strong> prévois accroitre ce projet en
            tendant vers une plateforme plus grande et d'avantage intuitive où
            chaque auto-école pourra se retrouver à manager ses candidats, son
            équipe, ses cours de formation mais aussi à faire des
            auto-évaluations dans tous les secteurs. Une meilleure organisation
            pour un rendement efficace en misant sur la compétence de chaque
            apprenant. Nous souhaitons repousser les limites géographique et
            temporaire en permettant à tout désireux de se former sans aucune
            contrainte de déplacement ni de temps. Bientôt acquérir des
            compétences sur le code routier pourra être un jeux d'enfant.
          </Typography>
        </Box>
      </Collapse>
    </Box>
  )
}

export default SideInfos
