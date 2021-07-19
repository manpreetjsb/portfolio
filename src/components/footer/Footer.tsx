import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks'

const Footer = () => (
  <Grid container justify='space-between'>
    <Box m={5}>
      <Typography variant='body1' component='h5'>
        © Manpreet Singh 2021
      </Typography>
    </Box>
    <Box m={5} display='flex'>
      <SocialLinks />
    </Box>
  </Grid>
)

export default Footer
