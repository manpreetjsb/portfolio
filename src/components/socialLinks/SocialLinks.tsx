import React from 'react'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'

const SocialLinks = () => (
  <>
    <Box>
      <Link
        href='https://github.com/manpreetjsb'
        target='_blank'
        color='inherit'
      >
        <GitHubIcon />
      </Link>
    </Box>
    <Box ml={1.5}>
      <Link
        href='https://github.com/manpreetjsb'
        color='inherit'
        target='_blank'
      >
        <LinkedInIcon />
      </Link>
    </Box>
  </>
)
export default SocialLinks
