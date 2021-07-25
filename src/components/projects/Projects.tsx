import React from 'react'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { FlexGrid } from './Projects.style'
import Portfolio from '../../assets/images/portfolio.jpg'

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
        <Card>
          <CardMedia
            image={Portfolio}
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
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Typescript, Material UI, Styled Component,
              Jest
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardMedia
            image={Portfolio}
            title='Contemplative Reptile'
            component='img'
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Currency Convertor
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              This is React Currency Convertor Application, you can search your
              country and convert currency to any other country.
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
              Component, Jest
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardMedia
            image={Portfolio}
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
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
              Component, Jest, Nextjs
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardMedia image={Portfolio} title='Shopping Cart' component='img' />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Shopping Cart
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              This is React made Shopping cart.
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
              Component, Jest
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardMedia image={Portfolio} title='Portfolio' component='img' />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Portfolio
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              This is React Currency Convertor Application, you can search your
              country and convert currency to any other country.
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
              Component, Jest
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
      <Grid item sm={4} xs={12}>
        <Card>
          <CardMedia
            image={Portfolio}
            title='Contemplative Reptile'
            component='img'
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Tic-tac-toe
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              This is React Currency Convertor Application, you can search your
              country and convert currency to any other country.
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
              Component, Jest
            </Typography>
          </CardContent>

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
        </Card>
      </Grid>
    </Grid>
  </>
)

export default Projects
