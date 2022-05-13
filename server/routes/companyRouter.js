const Router = require('express')
const router = new Router()
const companycontroller = require('../controllers/companyController')

router.post('/', companycontroller.create)
router.post('/', companycontroller.getAll)
// router.get('/', companycontroller.getOne)



module.exports = router