import * as React from 'react'
import { observer, inject } from 'mobx-react'

export default inject('rootStore')(observer((props) => {
  const { rootStore } = props
  const { loginPageManagement } = rootStore
  const { accountText, passwordText } = loginPageManagement

  return (
    <div id='container'>
      <div className='login'>
        Login: <input type='text' defaultValue={ accountText } onChange={(event) => {loginPageManagement.updateAccountText(event.target.value)}} />
        Password: <input type='password' defaultValue={ passwordText } onChange={(event) => {loginPageManagement.updatePasswordText(event.target.value)} }/>
        <button type='submit' onClick={() => loginPageManagement.login() } >Log In</button>
      </div>
    </div>
  )
}))
