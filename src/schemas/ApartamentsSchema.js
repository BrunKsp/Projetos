const joi = require('joi');


module.exports = joi.object({
    predio: joi.string().required().max(100),
    numberap: joi.string().required().max(100).email(),
    role: joi.string().default('vazio').max(8),
    
})