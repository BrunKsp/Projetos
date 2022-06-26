const { ObjectId } = require('mongodb');
const { connection } = require('./conn');

const getApartamentsCollection = async () => {
    const conn = await connection();
    return conn.collection('apartaments');
}

const findAll = async () => {
    const apartaments = await getApartamentsCollection();
    return apartaments.find().toArray();
}

const findById = async (id) => {
    const apartaments = await getApartamentsCollection();
    return apartaments.findOne(ObjectId(id))
}


const create = async (apartament) => {
    const apartaments = await getApartamentsCollection();
    const {insertedId} = await apartaments.insertOne(apartament);
    console.log(insertedId)
    return {_id: insertedId, ...apartament};
}

const edit = async (id, apartament) => {
    const apartaments = await getApartamentsCollection();
    const updateApartament = await apartaments.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: apartament },
        { returnDocument: 'after' }
    )
    return updateApartament.value;
}

const removeById = async (id) => {
    const apartaments = await getApartamentsCollection();
    const { deletedCount } = await 
    apartaments.deleteOne({ _id: ObjectId(id) });
    if(!deletedCount) throw new Error ("Falha ao remover");
    return true;
}
const createImage = (async (id, image) => {
    const apartaments = await getApartamentsCollection();

    const updateApartamentImage = await apartaments.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { image } },
        { returnDocument: 'after' }
    )
    return updateApartamentImage.value;
})


module.exports = {
    findAll,
    findById,
    create,
    edit,
    removeById , 
    createImage
};