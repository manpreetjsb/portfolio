import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const Footer = () => (
  <Grid container justify='space-between'>
    <Box m={5} color='primary'>
      <Typography variant='body1'>© Manpreet Singh 2021</Typography>
    </Box>
    <Box m={5} display='flex'>
      <SocialLinks />
    </Box>
  </Grid>
)

export default Footer
