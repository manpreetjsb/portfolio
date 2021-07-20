import React from 'react'
import { Box, Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { DiNodejs } from 'react-icons/di'
import Typography from '@material-ui/core/Typography'
import {
  SiTypescript,
  SiNextDotJs,
  SiGatsby,
  SiReact,
  SiRedux,
  SiSass,
  SiStorybook,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
} from 'react-icons/si'

import { UL } from './Technologies.styles'

const Technologies: React.FC = () => (
  <>
    <Container>
      <Box m={5}>
        <Grid>
          <Box component='h2'>Technologies</Box>
          <Box m={5}>
            <Typography>
              I have worked with a number of different Languages, Frameworks and
              Technologies, below are a few of the ones I am most familiar with.
            </Typography>
          </Box>
        </Grid>
        <section>
          <UL container spacing={5}>
            <Grid item>
              <SiNextDotJs />
            </Grid>
            <Grid item>
              <SiGatsby />
            </Grid>
            <Grid item>
              <SiReact />
            </Grid>
            <Grid item>
              <SiRedux />
            </Grid>
            <Grid item>
              <SiTypescript />
            </Grid>
            <Grid item>
              <SiSass />
            </Grid>
            <Grid item>
              <SiStorybook />
            </Grid>
            <Grid item>
              <SiHtml5 />
            </Grid>
            <Grid item>
              <SiCss3 />
            </Grid>
            <Grid item>
              <SiJavascript />
            </Grid>
            <Grid item>
              <SiGit />
            </Grid>
            <Grid item>
              <DiNodejs />
            </Grid>
          </UL>
        </section>
      </Box>
    </Container>
  </>
)

export default Technologies
