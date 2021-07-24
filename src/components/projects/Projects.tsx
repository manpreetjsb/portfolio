import React from 'react'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

const Projects: React.FC = () => (
  <>
    <Box m={5}>
      <Box component='h2'>Projects</Box>
    </Box>
    <Grid container spacing={3} alignItems='stretch'>
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <img
              src='../../assets/images/portfolio.jpg'
              width='572px'
              height='319px'
              alt='Pokemon'
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
          </CardActionArea>
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
              href='https://github.com/manpreetjsb/Pokemon'
              target='_blank'
            >
              Demo
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              image='../../assets/images/portfolio.jpg'
              title='Contemplative Reptile'
            />

            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Currency Convertor
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                This is React Currency Convertor Application, you can search
                your country and convert currency to any other country.
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <b>Stack:</b> React, Redux, Typescript, Material UI, Styled
                Component, Jest
              </Typography>
            </CardContent>
          </CardActionArea>
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
      <Grid item xs={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              image='../../assets/images/portfolio.jpg'
              title='Contemplative Reptile'
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
          </CardActionArea>
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
