const mongoose = require('mongoose')
// let moment = require('moment')
// pm.globals.set("CurrentDateTime, moment().format('MMMM Do YYYY, h:mm:ss a')")

const logsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    // date: {CurrentDateTime},
    // isShipBroken: { type: Boolean, default: true }
    isShipBroken: Boolean
    // date
})

const Log = mongoose.model('Log', logsSchema)

module.exports = Log