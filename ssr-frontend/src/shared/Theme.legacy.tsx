/*import * as React from "react"
import Helmet from 'react-helmet'
import { observer, inject } from 'mobx-react'

export default inject('rootStore')(observer((props) => {
  const { children, rootStore } = props

  return (
    <React.Fragment>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>
      <div id='header'>
        <div className='mediawindow'>Media Window</div>
        <div className='login'>Login</div>
      </div>
      { children }
      <footer></footer>
    </React.Fragment>
  )
}))
*/