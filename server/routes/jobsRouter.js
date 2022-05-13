const Router = require('express')
const router = new Router()
const jobsController = require('../controllers/jobsController')

router.post('/', jobsController.create)
router.get('/', jobsController.getAll)
router.get('/:id', jobsController.getOne)




module.exports = router