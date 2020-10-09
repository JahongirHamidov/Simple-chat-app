import React from 'react'
import {useContentStyles} from './useContentStyles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import image from '../../Assets/bgImage.png'


export function Content() {
  const classes = useContentStyles()


  return (
      <main role='main' className={classes.main}>
        
        <div className={classes.chatPlace}>
          
        </div>

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
