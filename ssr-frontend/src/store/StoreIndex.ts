import { toJS } from 'mobx'
import MediaWindowManagement from './MediaWindowManagement'
import LoginPageManagement from './LoginPageManagement'

export default class StoreIndex {
  mediaWindowManagement: object
  loginPageManagement: object

  constructor() {
    this.mediaWindowManagement = new MediaWindowManagement(this)
    this.loginPageManagement = new LoginPageManagement(this)
  }

  dehydrate() {
    return {
      mediaWindowManagement: toJS(this.mediaWindowManagement),
      loginPageManagement: toJS(this.loginPageManagement),
    }
  }
  
  hydrate(state: any) {
    Object.assign(this.mediaWindowManagement, state.mediaWindowManagement)
    Object.assign(this.loginPageManagement, state.loginPageManagement)
  }
}