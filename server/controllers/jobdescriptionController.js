const ApiError = require('../error/ApiError')
const {JobDescription} = require('../models/models')

class JobdescroptionController {
    async create(req,res) {
        const {name, description, position, contract, level, role, location} = req.body
        const jobdescription = await JobDescription.create({name, description, position, contract, level, role, location})
        return res.json(jobdescription)
    }

    async getAll(req,res) {
        const jobsdescription = await JobDescription.findAll()
        return res.json(jobsdescription)
    }
 
}


module.exports = new JobdescroptionController()