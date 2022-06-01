const ApartamentServices = require("../services/apartamentServices");

const findAll = (async (_request, response) => {
    const results = await ApartamentServices.findAll();
    response.json(results);
})

const findById = (async (request, response) => {
    const { id } = request.params;

    const result = await ApartamentServices.findById(id);
    if (!result) {
        response.status(404)
            .json({ message: 'Apartamento não localizado' })
    } else {
        response.json(result);
    }
})

const create = (async (request, response) => {
    const { predio, numberap , role } = request.body;
    const { _id, ...apartament } = await ApartamentServices.create({
        predio,
        numberap,
        role
        
    })
    response.status(201).json({
        predio: apartament.predio,
        numberap: apartament.ingredients,
        role: apartament.role,
        _id: _id
    })
})

const edit = (async (request, response) => {
    const { id } = request.params;

    const results = await ApartamentServices.edit(id, request.body);
    response.json(results);
})

const remove = (async (request, response) => {
    const { id } = request.params;

    await ApartamentServices.remove(id);
    return response.status(204)
    .json({ message: "Receita removida com sucesso"})
})

module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove
};