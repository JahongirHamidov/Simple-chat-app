import { fade, makeStyles } from '@material-ui/core/styles'
const drawerWidth = 240

export const useMyAppbarStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      display: 'flex',
    },
    brand: {
      textDecoration: 'none',
      color: 'white',
    },
    purple: {
        color: 'white',
        backgroundColor:'green'
    },
    appbar: {
      backgroundColor: '#303030',
      position: 'fixed'
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    title: {
      display: 'block',
      justifyContent:'center',
      alignItems:'center',
      
    },
    search: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      border: '1px solid #303030',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#fff',
      padding: '2px',
      borderRadius: 0,
      width: '100%',
      
      
    },
    searchIcon: {
      height: '100%',
      display: 'flex',
      backgroundColor:'#666',
      borderRadius: 0,
      color: '#505050'
    },
    inputRoot: {
      color: 'inherit',
      width: '12.8vw',
      justifyContent: 'left'
    },
    inputInput: {
      backgroundColor:'inherit',
      paddingLeft: `${theme.spacing(1)}px`,
      paddingRight: `${theme.spacing(1)}px`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    drawer: {
        width: 0,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        backgroundColor: '#303030'
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: '64px',
        backgroundColor: '#303030'

        
      },
    
      list: {
          backgroundColor: '#303030',
          paddingLeft: '5%'
      },
      divider: {
          color: '#303030',
          backgroundColor: 'grey'
      },
      font: {
          color: 'white' ,
      },
      icon: {
          color: '#909090'
      },  
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      
   
  }))
  