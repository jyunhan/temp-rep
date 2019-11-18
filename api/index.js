const express = require('express')
const path = require('path')
const http = require('http')
const cors = require('cors')

const app = express()
const port = 4000

app.options('*', cors())

app.set('port', port)
app.set('views', path.join(__dirname, './public/views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, './public')))

app.get('/api/msg', cors(), (req, res, next) => res.status(200).json({ status_code: 'F101', msg: 'Success' }))

const server = http.createServer(app)

server.listen(port)
