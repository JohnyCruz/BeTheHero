const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, respose){
        const ong_id = request.headers.authorization;
        
        const incidets = await connection('incidents')
                .where('ong_id',ong_id)
                .select('*');
        return respose.json(incidets);
    }
}