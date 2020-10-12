import React from 'react'
import {useContentStyles} from './useContentStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import image from '../../Assets/bgImage.png'
import { Container,Grid } from '@material-ui/core'


export function Content() {
  const classes = useContentStyles()


  return (
      <main role='main' className={classes.main}>
        <Container>
          <div className={classes.chatPlace}>
            <Grid
              container
              direction='column'
              justify= 'flex-start'
              alignItems='flex-start'
            >
                <span className={classes.bubble}>
                  hello
                </span>
                <span className={classes.bubble}>
                  hello my friend
                </span> 
            </Grid>
          </div>
        </Container>
        <div>  
          <TextField 
            id="outlined-basic" 
            label="Message" 
            variant="outlined" 
            className={classes.textField} 
          />
          <Button 
            variant='contained' 
            color='primary'
            className={classes.sendButton}
          >
              Send
          </Button>
        </div>
      </main>
  )
}
