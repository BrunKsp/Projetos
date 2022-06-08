const apartamentsModel = require('../models/apartamentsModel');
const apartamentSchema = require('../schemas/apartamentSchema');
const appError = require('../errors/appError');


const findAll = async () => apartamentsModel.findAll();
const findById = async (id) => apartamentsModel.findById(id);

//const findByEmail = async (email) => apartamentsModel.findByEmail(email);



const create = async (apartaments) => {
    const {value, error} = apartamentSchema.validate(apartaments);
    if(error){
        throw new appError("Erro geral", 400);
    }


    if(Numberap) {
        throw new appError("Apartamento já cadastrado", 409);
    }

    return apartamentsModel.create(value)
}

const edit = async (id, apartaments) => {
    const {error} = apartamentSchema.validate(user);
    if(error){
        throw new appError("Erro geral", 400);
    }

    return apartamentsModel.edit(id, apartaments);
}

const remove = async (id) => {
    try {
        return apartamentsModel.removeById(id);
    } catch(error){
        throw new appError("Erro ao remover registro", 400);
    }
}

module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove
}