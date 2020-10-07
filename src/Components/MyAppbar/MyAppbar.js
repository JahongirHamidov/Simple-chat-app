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
import {useMyAppbarStyles} from './useMyAppbarStyles'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar'
import { useTheme } from '@material-ui/core/styles'
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
              <div className={classes.user}>
                <Avatar 
                    src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' 
                    className={classes.avatar}
                  />
                  <div className={classes.userName}>
                    <Typography component='h6' variant='h6'>Room name   ...</Typography>
                    <Typography className={classes.textGrey}>last seen at ...</Typography>
                  </div>
              </div>
          </Typography>
            
          <div className={classes.sectionDesktop}>
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
        className={classes.drawer} 
        
      >
        <div className={classes.menu}>
          <Avatar 
            src='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy' 
            className={classes.avatar} 
            
          />
          <Typography>
            Jahongir
          </Typography>

        </div>
        <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <Button className={classes.searchIcon}>
                <SearchIcon />
              </Button>
        </div>


        <List className={classes.list}>
          <Link to='/chat' className={classes.link}>
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
