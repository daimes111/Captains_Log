const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    isShipBroken: { type: Boolean, defaultChecked: true }
})

const Log = mongoose.model('Log', logsSchema)

module.exports = Log