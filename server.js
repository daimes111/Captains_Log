require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const Log = require('./models/log')
const methodOverride = require('method-override')
const mongoose  = require('mongoose')
const app = express()

app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

// app.use(bodyParser())
app.use(methodOverride('_method'))
app.listen(3002, () => {
    console.log('Listening to Port 3002')
})


//index
app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('captains_log/Index', {
                logs: foundLogs
            })
        }
    })
})

//new
app.get('/logs/new', (req,res) => {
    res.render('captains_log/New')
})

//delete
app.delete('/logs/:id', (req,res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})


//update
app.put('/logs/:id', (req, res) => {
    req.body.isShipBroken = req.body.isShipBroken === 'true' || req.body.isShipBroken === 'on'? true : false 
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect(`/logs/${updatedFruit.id}`)
        }
    })
})


//create
app.post('/logs', (req,res) => {
    console.log(req.body.isShipBroken)
    req.body.isShipBroken = req.body.isShipBroken === 'true' ? true : false    
    console.log(req.body.isShipBroken)
    Log.create(req.body, (err, createdLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.redirect('/logs')
        }
    })
})

//edit
app.get('/logs/:id/edit', (req,res) => {
    Log.findById(req.params.id, (err, editLog) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('captains_log/Edit', {
                log: editLog
            })
        }
    })
})


//show
app.get('/logs/:id', (req,res) => {
    Log.findById(req.params.id, (err, foundLogs) => {
        if(err) {
            console.error(err)
            res.status(400).send(err)
        } else {
            res.render('captains_log/Show', {
                log: foundLogs
            })
        }
    })
})
