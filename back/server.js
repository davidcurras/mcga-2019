const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./router')

const app = express()
const port = 5000

const mongoDBURL = 'mongodb://localhost:27017/clase12'

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use('/api', router)

app.use(express.static('public'))

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}!`)
})