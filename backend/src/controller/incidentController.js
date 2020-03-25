const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
       
       const [id] = await connection('incidents').insert({
            title, 
            description, 
            value,
            ong_id
        })
        
        return response.json({id,title, description, value,ong_id});
      
    },

    async index(request, response){

        const {page = 1} = request.query;
        
        const [count] = await connection('incidents').count();//faz a contagem dos registros que temos na tabela, por teornar um array estamos usando a notação [count] na hora de selecionar o valor
        
        const incidents = await connection('incidents')//conecta na tabela incidents
                                .join('ongs','ongs.id','=','incidents.ong_id') //Aqui faço um inner join com a tabela ongs para trazer apenas as ongs cujos o id correspondem ao incidente
                                .limit(5)//delimita o retorno em 5 itens por vez
                                .offset((page -1) * 5) // define qual página estamos acessando o (page-1)*5 é para criar a paginação e ir pulando os registros das páginas anteriores
                                // .select('*')//aqui eu estaria retornando todas as colunas da tabela incidents e da tabela ong, porém a tabela incidents e a tabela ong possuem uma coluna com o mesmo nome e isso faz com que uma sobreponha a outra para evitar esse problema, usando o modelo abaixo
                                .select([
                                    'incidents.*',
                                    'ongs.name',
                                    'ongs.email',
                                    'ongs.whatsapp',
                                    'ongs.city',
                                    'ongs.uf'
                                ]);
        response.header('X-Total-Count',count['count(*)']) //estamos retornando o total de registros no cabeçado da resposta
        return response.json(incidents);
    },

    async delete(request, response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
                                .where('id',id)
                                .select('ong_id')
                                .first();
        console.log(incident.ong_id);
        console.log(ong_id);
        if(ong_id !== incident.ong_id){
            return response.status(401).json({error: "Operation not permitted."});
        }
        
        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }
}