const DeveloperModel = require('../model/developerEntity')

async function findAllLevels() {
    return await DeveloperModel.findAll({include: ["level"]})
}

async function findOneLevelById(idDeveloper){
    return await DeveloperModel.findOne({
        include: ["level"],
        where: {
            id: idDeveloper
        }
    })
}

//LevelModel.findByPk()

async function createLevel(developerRequest){
    return await DeveloperModel.create({
        name : developerRequest.name  ,
        gender : developerRequest.gender,
        born_at : developerRequest.born_at,
        age : developerRequest.age,
        hobby : developerRequest.hobby,
        levelId: developerRequest.level_id
    });
}

async function updateLevel(idDeveloper, developerRequest){
    return await DeveloperModel.update(
        {
            name : developerRequest.name  ,
            gender : developerRequest.gender,
            born_at : developerRequest.born_at,
            age : developerRequest.age,
            hobby : developerRequest.hobby,
            levelId: developerRequest.level_id
        }, 
        {
            where: {
                id: idDeveloper
            }
        })
}

async function deleteLevel(idDeveloper){
    await DeveloperModel.destroy({
        where: {
            id: idDeveloper
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