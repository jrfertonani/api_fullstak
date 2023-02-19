const LevelModel = require('../model/levelEntity')


async function findAllLevels() {
    return await LevelModel.findAll()
}

async function findOneLevelById(idLevel){
    return await LevelModel.findOne({
        where: {
            id: idLevel
        }
    })
}

//LevelModel.findByPk()

async function createLevel(name){
    return await LevelModel.create({name: name});
}

async function updateLevel(idLevel, newName){
    return await LevelModel.update(
        {
            name: newName
        }, 
        {
            where: {
                id: idLevel
            }
        })
}

async function deleteLevel(idLevel){
    await LevelModel.destroy({
        where: {
            id: idLevel
        }
    })
}

module.exports = {
    findAllLevels, 
    findOneLevelById,
    createLevel,
    updateLevel,
    deleteLevel
}