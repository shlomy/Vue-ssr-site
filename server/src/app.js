const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// const mysql = require('mysql')

const app = express()

app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  console.log(req)
  res.send({
    message: `Hello ${req.body.email} user has registered `
  })
})

app.listen(process.env.PORT || 8081)
