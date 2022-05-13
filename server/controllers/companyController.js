const ApiError = require('../error/ApiError')
const {Company} = require('../models/models')
const uuid = require('uuid')
const path = require('path')


class CompanyController {
    async create(req,res, next) {
        try {
            const {name, logo, rating} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const company = await Company.create({name, logo, rating, img: fileName})
    
            return res.json(company)
        } catch (e) {
               next(ApiError.badRequest(e.message))
        }
       
    }

    async getAll(req,res) {
        const jobs = await Job.findAll()
        return res.json(jobs)
    }
    

    async getOne(req,res) {
        
    }
 
}


module.exports = new CompanyController()