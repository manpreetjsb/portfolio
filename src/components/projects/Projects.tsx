import React from 'react'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Portfolio from '../../assets/images/portfolio.jpg'
import Pokemon from '../../assets/images/pokemon.png'
import QuizApp from '../../assets/images/quizApp.png'
import TicTecToe from '../../assets/images/tic-tec-toe.png'
import ReactShopping from '../../assets/images/react-shopping.png'
import Currency from '../../assets/images/currency-convertor.png'

import { BoxCard } from './Projects.style'

const Projects: React.FC = () => (
  <>
    <Box m={5}>
      <Box component='h2'>Projects</Box>
    </Box>
    <Grid
      spacing={3}
      container
      direction='row'
      alignItems='stretch'
      component='section'
    >
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia
              image={Pokemon}
              title='Contemplative Reptile'
              component='img'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Pokemon
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                This is a React Application where we fatch the API and show the
                result.
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Typescript, Material UI, Styled
                  Component, Jest
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/Pokemon'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://pokemon-manpreet.netlify.app/'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia
              image={Currency}
              title='Contemplative Reptile'
              component='img'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Currency Convertor
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                This is React Currency Convertor Application, you can search
                your country and convert currency to any other country.
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Typescript, Material UI, Styled Component
                  and Jest.
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/quizApp'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia
              image={QuizApp}
              title='Contemplative Reptile'
              component='img'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Quiz App
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Small Quiz App where you can have multiple choose answers. you
                need to select one and
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
                  Component, Jest and Nextjs
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia
              image={ReactShopping}
              title='Shopping Cart'
              component='img'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Shopping Cart
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                This is React Shopping cart. where user can add item delete item
                and can see Total.
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
                  Component and Jest
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://simple-shopping-cart-react.netlify.app'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia image={Portfolio} title='Portfolio' component='img' />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Portfolio
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                I have created my Portfolio by using React, Material UI, Styled
                Component and Typescript.
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Typescript, Material UI, Styled Component
                  and Jest
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
      <Grid item sm={4} xs={12}>
        <BoxCard>
          <Box>
            <CardMedia
              image={TicTecToe}
              title='Contemplative Reptile'
              component='img'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Tic-tac-toe
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Tic-tac-toe game is made in React with Typescript. where one
                side is played by computer and other by user.
              </Typography>
              <Box mt={2}>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <b>Stack:</b> React, Typescript, Material UI, Styled Component
                  and Jest
                </Typography>
              </Box>
            </CardContent>
          </Box>
          <CardActions>
            <Button
              size='small'
              color='primary'
              href='https://github.com/manpreetjsb/currency-convertor'
              target='_blank'
            >
              Github source
            </Button>
            <Button
              size='small'
              color='primary'
              href='https://tic-tac-toe-manpreet.netlify.app/'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </BoxCard>
      </Grid>
    </Grid>
  </>
)

export default Projects
