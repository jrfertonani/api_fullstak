const { findAllLevels, findOneLevelById, createLevel, updateLevel, deleteLevel } = require ('../repository/levelRepository')


async function findAll(){
    return await findAllLevels().then( (result) => result)
}

async function findLevelById(idLevel) {
    return await findOneLevelById(idLevel)
}

async function createNewLevel(name) {
    return await createLevel(name)
}

async function updateLevelbyId(idLevel, newName){ 
    return await updateLevel(idLevel, newName)
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