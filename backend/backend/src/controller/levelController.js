const express = require('express')
const levelRouter = express.Router();

const leverService = require('../service/levelService')

levelRouter.get('/', async (req,resp, next) => {
    resp.status(200).json(await leverService.findAll())
})

levelRouter.get('/:id', async (req,resp, next) => {
    var idLevel = req.params.id
    if (idLevel == null ){
        resp.status(400).json({"message": "id isn't null"})
    } 
    else {
        resp.status(200).json(await leverService.findLevelById(idLevel))
    }
})

levelRouter.post('/', async (req,resp, next) => {
    var newName = req.body.name
    if (newName == null ){
        resp.status(400).json({"message": "name isn't null"})
    }
    else {
        resp.status(201).json(await leverService.createNewLevel(newName))
    } 
})

levelRouter.put('/:id', async (req,resp, next) => {
    var idLevel = req.params.id
    var newName = req.body.name
    if (idLevel == null ){
        resp.status(400).json({"message": "id isn't null"})
    }
    else if (newName == null ){
        resp.status(400).json({"message": "name isn't null"})
    }  
    else {
        resp.status(200).json(await leverService.updateLevelbyId(idLevel, newName))
    }
})

levelRouter.delete('/:id', async (req,resp, next) => {
    var idLevel = req.params.id
    if (idLevel == null ){
        resp.status(400).json({"message": "id isn't null"})
    } 
    else {
        resp.status(204).json(await leverService.deleteLevelById(idLevel))
    }
})

module.exports = levelRouter;