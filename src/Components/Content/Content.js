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
        
        <div>
          
        </div>

        <div>  
          <TextField id="outlined-basic" label="Message" variant="outlined" />
          <Button variant='contained' color='primary'>Send</Button>
        </div>
      </main>
  )
}
