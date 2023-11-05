const  mongoose  = require("mongoose");

const esquema = new mongoose.Schema(
    {
        posicao: {
            type: Number,
            required: 'é obrigatorio',
        },
        
        titulo:{
            type: String,
            required: 'é obrigatorio',
        },
        descricao: {
            type: String,
            default: '',
        },
        status:{
            type: String,
            required: 'é obrigatorio',
        },
        dataEntrega: {
            type: Date,
            default: null,
        },
        usuarioCriador: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuario',
            required: 'é obrigatorio',
        }
    },
    {
        timestamps: true
    }
);


const EsquemaTarefa = mongoose.model.Tarefa || mongoose.model('Tarefa', esquema);
module.exports = EsquemaTarefa;