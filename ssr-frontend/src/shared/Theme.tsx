import * as React from 'react'
import { observer, inject } from 'mobx-react'
import MediaWindow from './MediaWindow'

type HeaderDOM = {
  moduleName: string;
  className: string;
  DOMText: string;
}

const headerDOMList:  HeaderDOM[] = [
  {
    moduleName: 'MediaWindow',
    className: 'mediawindow',
    DOMText: 'Media Window'
  },
  {
    moduleName: 'Logout',
    className: 'logout',
    DOMText: 'Log out'
  },
]

interface ModuleObject {
  [moduleName: string]: object
}

const moduleMap: ModuleObject = {
  'MediaWindow': <MediaWindow/>,
  'Logout': (<h1>Log out</h1>)
}

export default inject('rootStore')(observer((props) => {
  const { rootStore } = props
  const { mediaWindowManagement } = rootStore
  const switchPageByModuleName = (moduleName: string) => mediaWindowManagement.switchPageByModuleName(moduleName)
  const renderModule = (moduleName: string) => moduleMap[moduleName]

  return (
    <>
      <div id='header'>
        { headerDOMList.map(({moduleName, className, DOMText}, idx) => <div className={className} key={idx} onClick={() => switchPageByModuleName(moduleName)} >{ DOMText }</div> )}
      </div>
      <div id='container'>
        { renderModule(mediaWindowManagement.currentModuleName) }
      </div>
      <div className='footer'></div>
    </>
  )
}))
