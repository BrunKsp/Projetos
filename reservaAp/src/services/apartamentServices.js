const apartamentModels = require('../models/apartamentModels');
const apartamentSchema = require('../schemas/apartamentSchema');
const appError = require('../errors/appError');


const findAll = async () => apartamentModels.findAll();




const create = async (apartament) => {
    const {value, error} = apartamentSchema.validate(apartament);
    if(error){
        throw new appError("Erro geral", 400);
    }


    if(Numberap) {
        throw new appError("Apartamento já cadastrado", 409);
    }

    return apartamentModels.create(value)
}

const edit = async (id, apartament) => {
    const {error} = apartamentSchema.validate(user);
    if(error){
        throw new appError("Erro geral", 400);
    }

    return apartamentModels.edit(id, apartament);
}

const remove = async (id) => {
    try {
        return apartamentModels.removeById(id);
    } catch(error){
        throw new appError("Erro ao remover registro", 400);
    }
}

module.exports = {
    findAll,
    //findById,
    create,
    edit,
    remove
}