import React from 'react'
import { Box, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Home: React.FC = () => (
  <>
    <Container>
      <Grid container justify='space-between'>
        <Box m={5}>#Portfolio</Box>
        <Box m={5}>
          <ul>
            <li>Projects</li>
            <li>About me</li>
            <li>Technologies</li>
          </ul>
        </Box>
        <Box m={5}>
          <GitHubIcon />
          <LinkedInIcon />
        </Box>
      </Grid>
    </Container>
  </>
)

export default Home
