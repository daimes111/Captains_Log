const Log = require('../models/log')

const dataController= {
    index(req,res, next){
        Log.find({}, (err, allLogs) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = allLogs
                next()
            }
        })
    },
    destroy(req, res, next){
        Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = deletedLog
                next()
            }
        })
    }, 
    update(req, res, next){
        req.body.isShipBroken = req.body.isShipBroken === 'true' || req.body.isShipBroken === 'on'? true : false 
        Log.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedLog) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = updatedLog
                next()
            }
        })
    }, 
    create(req, res, next){
        req.body.isShipBroken = req.body.isShipBroken === 'true' || req.body.isShipBroken === 'on'? true : false 
        Log.create(req.body, (err, createdLog) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = createdLog
                next()
            }
        })
    }, 
    showEdit(req, res, next){
        Log.findById(req.params.id, (err, foundLog) => {
            if(err){
                res.status(404).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = foundLog
                next()
            }
        })
    }
}

module.exports = dataController