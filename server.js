/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const http = require('http')
const https = require('https')

const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3000

const KEY_PATH = './localhost-key.pem'
const CERT_PATH = './localhost.pem'

const hasHttpsCert = fs.existsSync(KEY_PATH) && fs.existsSync(CERT_PATH)

app.prepare().then(() => {
  if (hasHttpsCert) {
    const httpsOptions = {
      key: fs.readFileSync(KEY_PATH),
      cert: fs.readFileSync(CERT_PATH),
    }

    https
      .createServer(httpsOptions, (req, res) => {
        handle(req, res)
      })
      .listen(PORT, () => {
        console.log(`> HTTPS server ready on https://localhost:${PORT}`)
      })
  } else {
    http
      .createServer((req, res) => {
        handle(req, res)
      })
      .listen(PORT, () => {
        console.log(`> HTTP server ready on http://localhost:${PORT}`)
      })
  }
})
