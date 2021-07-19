import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks'

const Footer = () => (
  <Grid container justify='space-between'>
    <Box m={5} color='primary'>
      © Manpreet Singh 2021
    </Box>
    <Box m={5} display='flex'>
      <SocialLinks />
    </Box>
  </Grid>
)

export default Footer
