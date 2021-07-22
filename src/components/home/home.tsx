import React from 'react'
import { Box, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import SocialLinks from '../socialLinks/SocialLinks'
import Footer from '../footer/Footer'
import Technologies from '../technologies/Technologies'
import AboutUs from '../about-us/About-us'

const Home: React.FC = () => (
  <>
    <Container>
      <Grid container justify='space-between'>
        <Box m={5}>#Manpreet</Box>
        {/* <Box m={5} display='flex'>
          <Box>Projects</Box>
          <Box>About me</Box>
          <Box>Technologies</Box>
        </Box> */}
        <Box m={5} display='flex'>
          <SocialLinks />
        </Box>
      </Grid>
      <Box m={10} component='h2'>
        Hi, My name is Manpreet Singh, I am Frontend Developer.
      </Box>
      <Box>
        <AboutUs />
      </Box>
      <Divider />
      <Box>
        <Technologies />
      </Box>
      <Footer />
    </Container>
  </>
)

export default Home
