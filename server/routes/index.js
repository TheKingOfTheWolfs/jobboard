const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const jobdescriptionRouter = require('./jobdescriptionRouter')
const jobsRouter = require('./jobsRouter')
const usersRouter = require('./usersRouter')

router.use('/user', usersRouter)
router.use('/company', companyRouter)
router.use('/job', jobsRouter)
router.use('/jobdescriptions', jobdescriptionRouter)


module.exports = router