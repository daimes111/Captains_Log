const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')

//index
router.get('/', dataController.index, viewController.index)

//new
router.get('/new', viewController.newView)

//destroy
router.delete('/:id', dataController.destroy, viewController.redirectHome)

//update
router.put('/:id', dataController.update, viewController.redirectShow)

//create
router.post('/', dataController.create, viewController.redirectHome)

//edit
router.get('/:id/edit', dataController.showEdit, viewController.edit)

//show
router.get('/:id', dataController.showEdit, viewController.show)

module.exports = router 