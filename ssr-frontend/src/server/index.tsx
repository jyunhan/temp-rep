import express from 'express'
import path from 'path'
import fs from 'fs'
import cors from 'cors'
import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

// import { nodemodule } from './nodemodule'
// console.log(nodemodule.fib(1))

const mod = require('./nodemodule')
console.log(mod.nodemodule.fib(6))

import App from '../shared/App'

const app = express()

app.use(cors())
app.use(express.static('public'))

app.get('*', (req: any, res: any, next: any) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <link rel='stylesheet' href='/main.css' />
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="root">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
