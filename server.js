require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
// const methodOverride = require('method-override')
// const mongoose  = require('mongoose')
const app = express()

app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

// mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true})
// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB Atlas')
// })

app.use(bodyParser())
// app.use(methodOverride('method'))
app.listen(3002, () => {
    console.log('Listening to Port 3002')
})


//index
// app.get('/logs', (req, res) => {
    
// })

//new
app.get('/logs/new', (req,res) => {
    res.render('captains_log/New')
})

//delete


//update


//create
app.post('/logs', (req,res) => {
    req.body.isShipBroken === true ? req.body.isShipBroken = true : req.body.isShipBroken = false
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        } else {
            res.redirect('captains_log/Show')
        }
    })
})

//edit


//show
