const mongoose = require("mongoose");

const benefitsCreateSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    razaoSocial: {
        type: String,
        required: true,
        unique: true,
    },
    descricao: {
        type: String,
    },
    tipoPessoa: {
        type: String,
        enum: ["Jurídica", "Física", ""],
    },
    cpfCnpj: {
        type: String,
    },
    ans: {
        type: String,
    },
    categoria: {
        type: String,
        enum: ["Alimentação", "Artes", "Escolas", "Academias", "Outros", ""],
    },
    statusConvenio: {
        type: String,
        required: true,
        enum: ["Ativo", "Inativo"],
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
    considerarIr: {
        type: String,
        required: true,
        enum: ["Sim", "Não"],
    },
    descontoAut: {
        type: String,
        required: true,
        enum: ["Sim", "Não"],
    },

    logotipo: {
        type: String,
    },

    site: {
        type: String,
    },
    email: {
        type: String,
    },
    telefCelular: {
        type: String,
    },
    dataAssinatura: {
        type: Date,
        default: Date.now,
    },
    dataInicio: {
        type: Date,
        default: Date.now,
    },
    sitContrato: {
        type: String,
        enum: ["Concluído", "Pendência", "Cancelado", ""],
    },
    dataFinal: {
        type: Date,
        default: Date.now,
    },
    contratoSit: {
        type: Boolean,
        default: false,
    },
});

const benefitsCreate = mongoose.model("Benefits", benefitsCreateSchema);
module.exports = benefitsCreate;
