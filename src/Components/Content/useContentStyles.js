import { makeStyles, useTheme } from '@material-ui/core/styles'
import {image} from '../../Assets/bgImage.png'

const drawerWidth = 240

export const useContentStyles = makeStyles((theme) => ({
     main: {
        backgroundImage: image,
        marginLeft: 250
     },
     chatPlace: {
       width: 1116,
       height: 430,
       backgroundImage: `url(${image})`,
       backgroundColor: ''
     },
     textField: {
        width: '80%',
     },
     sendButton: {
      padding: 15 
     },
    
  }))
  