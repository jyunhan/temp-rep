import { observable, action, computed, autorun } from 'mobx'
import neo4j from 'neo4j-driver'

export default class LoginPageManagement {
  @observable accountText: string = ''
  @observable passwordText: string = ''

  constructor(rootStore: object){
    autorun(() => {
      // this.rootStore = rootStore
    })
  }

  @action /*async*/
  updateAccountText(text: string) {
    this.accountText = text
  }

  @action
  updatePasswordText(text: string) {
    this.passwordText = text
  }

  @action
  async login(): Promise<any> {
    try {
      const driver = neo4j.driver(
        'bolt://localhost',
        neo4j.auth.basic('neo4j', '1234')
      )

      const session = driver.session()

      const result = await session.run('MATCH (tom:Person {name: $nameParam})-[:ACTED_IN]->(tomHanksMovies) RETURN tom,tomHanksMovies', {
        nameParam: 'Tom Hanks'
      })
      console.log(result)
      
      driver.close()
    } catch(errMsg) {
      console.error(errMsg)
    }

      // console.log(`${this.accountText}, ${this.passwordText}`)
  }
}
