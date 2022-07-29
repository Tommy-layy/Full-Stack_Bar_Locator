const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static(`${__dirname}/client/build`))

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/', routes)

const { Bar } = require('./models')

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/bar', async (req, res) => {
  const bar = await Bar.find({})
  res.json(bar)
})

db.on('error', console.error.bind(console, 'MongoDB connection error!'))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// heroku config:set MONGODB_URI='mongodb+srv://Tommyle:123qwe@bar.akacn.mongodb.net/?retryWrites=true&w=majority'
