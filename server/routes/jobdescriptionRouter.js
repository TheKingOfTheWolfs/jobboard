const Router = require('express')
const router = new Router()
const jobdescriptionController = require('../controllers/jobdescriptionController')

router.post('/', jobdescriptionController.create)
router.get('/', jobdescriptionController.getAll)



module.exports = router