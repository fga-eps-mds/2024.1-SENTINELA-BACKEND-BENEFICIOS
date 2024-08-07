const express = require("express");
const routes = express.Router();
const benefitsFormController = require("./Controllers/benefitsFormController");
//const { tokenValidation } = require("./Utils/token"); => Utilizacao do token.

// Private
// routes.get('/benefits', tokenValidation, ???.getUsers);
// routes.get('/benefits/:id', tokenValidation,  ???.getUserById);
routes.post("/benefits/create", benefitsFormController.createBenefitsForm);
routes.get("/benefits", benefitsFormController.getBenefitsForm);
routes.get("/benefits/:id", benefitsFormController.getBenefitsFormById);
routes.delete(
    "/benefits/delete/:id",
    benefitsFormController.deleteBenefitsFormById
);
routes.patch(
    "/benefits/update/:id",
    benefitsFormController.updateBenefitsFormById
);

// Public

module.exports = routes;
