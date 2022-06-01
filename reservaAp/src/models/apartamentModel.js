const { ObjectId } = require('mongodb');
const { connection } = require('./conn');
const getapartamentCollection = async () => {
    const conn = await connection();
    return conn.collection('apartament');
}



const findById = async (id) => {
    const apartament = await getapartamentCollection();
    return apartament.findOne(ObjectId(id))
}

/*const findByname = async (name) => {
    const recipes = await getrecipesCollection();
    return recipes.findOne({name});
}*/

const create = async (apartament) => {
    const apartament = await getapartamentCollection();
    const {insertedId} = await apartament.insertOne(apartament);
    console.log(insertedId)
    return {_id: insertedId, ...apartament};
}

const edit = async (id, apartament) => {
    const apartament = await getapartamentCollection();
    const updateApartament = await apartament.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: apartament },
        { returnDocument: 'after' }
    )
    return updateApartament.value;
}

const removeById = async (id) => {
    const apartament = await getapartamentCollection();
    const { deletedCount } = await 
    apartament.deleteOne({ _id: ObjectId(id) });
    if(!deletedCount) throw new Error ("Falha ao remover");
    return true;
}


module.exports = {
    //findByname,
    findById,
    create,
    edit,
    removeById
};