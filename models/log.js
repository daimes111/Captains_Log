const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    isShipBroken: { type: Boolean, defaultChecked: true}
})

const Logs = mongoose.model('Logs', logsSchema)

module.exports = Logs