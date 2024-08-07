const Beneficios = require("../Models/benefitsCreateSchema");

const createNew = async (req, res) => {
    try {
        const newSchema = new Beneficios(req.body);
        await newSchema.save(); // pausa até o banco salvar
        return res.status(201).send(newSchema);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getNews = async (req, res) => {
    try {
        const newSchema = await Beneficios.find();
        res.status(200).send(newSchema);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createNew,
    getNews,
};
