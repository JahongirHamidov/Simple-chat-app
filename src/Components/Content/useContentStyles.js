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
       height: '70vh',
       paddingTop: '2%',
       display: 'flex',
     },
     textField: {
        width: '80%',
     },
     sendButton: {
      padding: 15 
     },
     bubble: {
       backgroundColor: '#dedede',
       border: '1px solid white',
       borderRadius: '10px',
       padding: 5,
       flexDirection: 'column'
       
     }
    
  }))
  