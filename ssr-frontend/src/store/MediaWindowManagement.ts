// import axios from 'axios'
import { observable, action, computed, autorun } from 'mobx'

export default class MediaWindowManagement {
  @observable currentModuleName: string
  @observable streamObject: any

  constructor(rootStore: object){
    this.currentModuleName = 'MediaWindow'
    autorun(() => {
      // this.rootStore = rootStore
    })
  }

  @action /*async*/
  switchPageByModuleName(moduleName: string) {
    console.log(moduleName)
    this.currentModuleName = moduleName || this.currentModuleName
  }

  @action
  doStreamimg(stream: any) {
    this.streamObject = stream
  }

  @computed get
  openModal() {
    return 123
  }
}
