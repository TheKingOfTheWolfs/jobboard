import {makeAutoObservable} from "mobx"

export default class JobStore {
    constructor() {
        this._jobs = [
        {"id": 1, "company" : "Microsoft", "title" : "Full-Stack"},
        {"id": 2, "company" : "Google", "title" : "BackEnd"},
        {"id": 3, "company" : "Amazon", "title" : "FrontEnd"},
        {"id": 4, "company" : "Microsoft", "title" : "Cloud Engineer"},   
        ]

        
        makeAutoObservable(this)
    }

    setJobs(jobs) {
        this._jobs = jobs
    }

    get job() {
        return this._jobs
    }
}
