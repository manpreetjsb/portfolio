import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const AboutUs: React.FC = () => (
  <>
    <Box m={5}>
      <Box component='h2'>About Us</Box>

      <Typography>
        I am a self-taught Frontend Web Developer specialising in JavaScript and
        React.js. I am based in London and currently looking for a full-time
        position. I have worked in the Tech industry over the last few years
        mainly in Project and Account Management, but I am developer at heart!
        Please feel free to get in touch with me, always happy to have a chat
        about anything related to web development.
      </Typography>
    </Box>
  </>
)

export default AboutUs
