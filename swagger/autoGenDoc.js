/**
 * Configurações para gerar automaticamente a documentação do swagger
 * configurações da documentação tbm 
 */

const mongooseToSwagger = require('mongoose-to-swagger');
const EsquemaUsuario = require('../src/models/usuario.js');
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR'
})

const outputFile = './swagger_output.json'; /** arquivo que vai ser gerado pelo autogen com a doc no formato json */
const endpointsFiles = ['../index.js', '../src/routes.js']; /**local das rotas, end-pointes */

let doc = {            /**configuração da doc do swagger*/
    info: {
        version: "1.0.0",
        title: "API do BoardTasks",
        description: "Documentação de API do BoardTasks"
    },

    servers: [
        {
            url: "http://localhost:4000/",
            description:"Servidor localhost."
        },
        {
            url: "https://board-tasks-back-navy.vercel.app",
            description: "Servidor de produção."
        }
    ],

    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
        schemas: {
            Usuario: mongooseToSwagger(EsquemaUsuario)
        }

    }
}


/**
 * chamando o swaggerAutogen chamado lá em cima e passando parametros para ele
 * e dando um .then para que ele espere
 */
swaggerAutogen(outputFile, endpointsFiles, doc).then(()=>{
    console.log('Documentação do Swagger gerada encontra-se no arquivo em: ' +outputFile);
    if(process.env.NODE_ENV !== 'production'){
        require('../index.js');
    }
})