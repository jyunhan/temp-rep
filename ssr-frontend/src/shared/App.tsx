import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'mobx-react'
import * as mobx from 'mobx'

import routes from './routes'
import StoreIndex from '../store/StoreIndex'

mobx.configure({
  enforceActions: 'observed',
})

export default (props: any) => {
  const rootStore = props.rootStore || new StoreIndex()

  return (
    <Provider rootStore={ rootStore }>
      {renderRoutes(routes)}
    </Provider>
  )
}
