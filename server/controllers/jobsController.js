const ApiError = require('../error/ApiError')
const {Job} = require('../models/models')


class JobsController {
    async create(req,res) {
        const {name} = req.body
        const job = await Job.create({name})
        return res.json(job)
    }

    async getAll(req,res) {
        const jobs = await Job.findAll()
        return res.json(jobs)
    }
    

    async getOne(req,res) {
        
    }
 
}


module.exports = new JobsController()