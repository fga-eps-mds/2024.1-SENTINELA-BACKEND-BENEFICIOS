const benefitsForm = require("../Models/benefitsFormSchema");
const util = require("../Util/utils");

const createBenefitsForm = async (req, res) => {
    try {
        const message = util.validator(req.body);

        if (message) {
            return res.status(400).send({ erro: message });
        }

        const benefits = new benefitsForm(req.body);

        await benefits.save();
        return res.status(201).send(benefits);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getBenefitsForm = async (req, res) => {
    try {
        const benefits = await benefitsForm.find({});
        return res.status(200).send(benefits);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getBenefitsFormById = async (req, res) => {
    try {
        const benefits = await benefitsForm.findById(req.params.id);
        if (!benefits) {
            return res.status(404).send({ erro: "Not Found" });
        }
        return res.status(200).send(benefits);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const deleteBenefitsFormById = async (req, res) => {
    try {
        const deletedBenefits = await benefitsForm.findByIdAndDelete(
            req.params.id
        );
        if (!deletedBenefits) {
            return res.status(404).send({ erro: "Not Found" });
        }
        return res.status(200).send(deletedBenefits);
    } catch (error) {
        return res.status(400).send(error);
    }
};

const updateBenefitsFormById = async (req, res) => {
    try {
        const updatedBenefits = await benefitsForm.findById(req.params.id);
        if (!updatedBenefits) {
            return res.status(404).send({ erro: "Not Found" });
        }
        Object.assign(updatedBenefits, req.body.benefitsData);
        await updatedBenefits.save();
        return res.status(200).send(updatedBenefits);
    } catch (error) {
        return res.status(400).send(error);
    }
};

module.exports = {
    createBenefitsForm,
    getBenefitsForm,
    getBenefitsFormById,
    deleteBenefitsFormById,
    updateBenefitsFormById,
};
