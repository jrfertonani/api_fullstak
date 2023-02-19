const express = require('express')
const developerRouter = express.Router();
const DeveloperRequest = require('../model/request/developerRequest')

const developerService = require('../service/developerService')

developerRouter.get('/', async (req,resp, next) => {
    resp.status(200).json(await developerService.findAll())
})

developerRouter.get('/:id', async (req,resp, next) => {
    var idLevel = req.params.id
    if (idLevel == null ){
        resp.status(400).json({"message": "id isn't null"})
    } 
    else {
        resp.status(200).json(await developerService.findLevelById(idLevel))
    }
})

developerRouter.post('/', async (req,resp, next) => {
    const developerRequest = new DeveloperRequest(req.body.name, req.body.level_id, req.body.gender, req.body.born_at, req.body.age, req.body.hobby)

    if (developerRequest == null ){
        resp.status(400).json({"message": "name isn't null"})
    }
    else {
        resp.status(201).json(await developerService.createNewLevel(developerRequest))
    } 
})

developerRouter.put('/:id', async (req,resp, next) => {
    const developerRequest = new DeveloperRequest(req.body.name, req.body.level_id, req.body.gender, req.body.born_at, req.body.age, req.body.hobby)

    var idDeveloper = req.params.id
    if (idDeveloper == null ){
        resp.status(400).json({"message": "id isn't null"})
    }
    else if (developerRequest == null ) {
        resp.status(400).json({"message": " Request Null"})
    }
    
    else {
        resp.status(200).json(await developerService.updateLevelbyId(idDeveloper, developerRequest))
    }
})

developerRouter.delete('/:id', async (req,resp, next) => {
    var idLevel = req.params.id
    if (idLevel == null ){
        resp.status(400).json({"message": "id isn't null"})
    } 
    else {
        resp.status(204).json(await developerService.deleteLevelById(idLevel))
    }
})

module.exports = developerRouter;