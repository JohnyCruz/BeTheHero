const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async create(request, response){
        const {id} = request.body;
        console.log(request.body);
        const name = await connection('ongs').where('id',id).select('name').first();
        if(!name){
            return response.status(400).json({erro: "No ONG found with this ID"});
        }
        return response.json({name});
    }
}