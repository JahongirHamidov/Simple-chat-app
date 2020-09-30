import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Button from '@material-ui/core/Button'
import youtube from '../../Assets/youtube-512.webp'
import {useMyAppbarStyles} from './useMyAppbarStyles'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar'
import { useTheme } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {GlobalState} from '../../globalState'
import {Link} from 'react-router-dom'

export function MyAppbar() {
  const classes = useMyAppbarStyles()
  const theme = useTheme()
  const {open, setOpen} = React.useContext(GlobalState)



  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} noWrap>
            <Link to='/' className={classes.brand}>
              <Typography component='h4' variant='h4' className={classes.brand}>
                Chat app
              </Typography>
            </Link>
          </Typography>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
              <Button className={classes.searchIcon}>
                <SearchIcon />
              </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
                <VideoCallIcon />
            </IconButton>
            <IconButton color='inherit'>
              <AppsIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton  >
              <Avatar className={classes.purple}>J</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>


      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
                
        <List className={classes.list}>
          <Link to='/'>
            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy'/>
              </ListItemIcon>
              <ListItemText primary={'James'} />
            </ListItem>
          </Link>
            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy'/>
              </ListItemIcon>
              <ListItemText primary={'Harry'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy'/>
              </ListItemIcon>
              <ListItemText primary={'Thomas'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' />
              </ListItemIcon>
              <ListItemText primary={'Larry'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' />
              </ListItemIcon>
              <ListItemText primary={'John'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' />
              </ListItemIcon>
              <ListItemText primary={'Adam'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' />
              </ListItemIcon>
              <ListItemText primary={'William'} />
            </ListItem>

            <ListItem button className={classes.font}>
              <ListItemIcon className={classes.icon}>
                <Avatar src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' />
              </ListItemIcon>
              <ListItemText primary={'Bill'} />
            </ListItem>

        </List>
      </Drawer>
      

    </div>
  )
}
