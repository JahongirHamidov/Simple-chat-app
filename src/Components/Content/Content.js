import React from 'react'
import clsx from 'clsx'
import {GlobalState} from '../../globalState'
import {useContentStyles} from './useContentStyles'


export function Content() {
  const classes = useContentStyles()
  const {open} = React.useContext(GlobalState)


  return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.videos}>
         
        </div>
      </main>
  )
}
