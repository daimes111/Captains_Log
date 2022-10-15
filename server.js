require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const db = require('./models/db')

db.once('open', () => {
    console.log('Connected to DB Atlas')
})

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

/*Start Middlewear*/
// app.use(bodyParser())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/logs', require('./controllers/routeController'))
/*END Middlewear */


app.listen(3002, () => {
    console.log('Listening to Port 3002')
})