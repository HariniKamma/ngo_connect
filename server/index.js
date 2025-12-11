const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const volunteers = require('./routes/volunteers')
const donations = require('./routes/donations')
const updates = require('./routes/updates')
const db = require('./db')


const app = express()
app.use(cors())
app.use(bodyParser.json())


app.use('/api/volunteers', volunteers)
app.use('/api/donations', donations)
app.use('/api/updates', updates)


app.listen(4000, ()=> console.log('Server running on http://localhost:4000'))