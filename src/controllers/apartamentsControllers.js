const apartamentServices = require("../services/apartamentServices");

const findAll = (async (_request, response) => {
    const results = await apartamentServices.findAll();
    response.json(results);
    if(!results){
        response.status(404)
            .json({ message:'Nenhum apartamento Disponivel!!'})
    } else {
        response.json(results);
    }
})

const findById = (async (request, response) => {
    const { id } = request.params;

    const result = await apartamentServices.findById(id);
    if (!result) {
        response.status(404)
            .json({ message: 'Apartamento não localizado' })
    } else {
        response.json(result);
    }
})

const create = (async (request, response) => {
    const { predio, numberap , role } = request.body;
    const { _id, ...apartament } = await apartamentServices.create({
        predio,
        numberap,
        role
        
    })
    response.status(201).json({
        predio: apartament.predio,
        numberap: apartament.ingredients,
        role: apartament.role,
        _id: apartament._id
    })
})

const edit = (async (request, response) => {
    const { id } = request.params;

    const results = await apartamentServices.edit(id, request.body);
    response.json(results);
})

const remove = (async (request, response) => {
    const { id } = request.params;

    await apartamentServices.remove(id);
    return response.status(204)
    .json({ message: "Receita removida com sucesso"})
})
const createImage = (async(request, response) => {
    const { id } = request.params;
    const image = request.file ? request.file.filename : undefined;

    const fullUrl = `${request.get('host')}/uploads/${image}`;

    const results = await apartamentServices.createImage(id, fullUrl);
    response.json(results);
})
module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove,
    createImage 
};