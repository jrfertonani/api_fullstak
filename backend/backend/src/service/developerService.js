const { findAllLevels, findOneLevelById, createLevel, updateLevel, deleteLevel } = require ('../repository/developerRepository')


async function findAll(){
    return await findAllLevels().then( (result) => result)
}

async function findLevelById(idLevel) {
    return await findOneLevelById(idLevel)
}

async function createNewLevel(developerRequest) {
    return await createLevel(developerRequest)
}

async function updateLevelbyId(idLevel, developerRequest){ 
    return await updateLevel(idLevel, developerRequest)
}

async function deleteLevelById(idLevel){
    return await deleteLevel(idLevel)
}

module.exports = {
    findAll,
    createNewLevel,
    findLevelById,
    createNewLevel,
    updateLevelbyId,
    deleteLevelById
}