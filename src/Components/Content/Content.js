import React from 'react'
import {useContentStyles} from './useContentStyles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import image from '../../Assets/bgImage.png'

export function Content() {
  const classes = useContentStyles()


  return (
      <main role='main'className={classes.main}>
        <Paper elevation={3} className={classes.paper}>
             
        </Paper>
      </main>
  )
}
