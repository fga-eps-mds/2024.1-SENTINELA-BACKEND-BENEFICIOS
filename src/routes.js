const express = require("express");
const routes = express.Router();
const NewController = require("./Controllers/newController");

// Private
// routes.get('/benefits', tokenValidation, ???.getUsers);
// routes.get('/benefits/:id', tokenValidation,  ???.getUserById);

// Public
routes.post("/benefits/create", NewController.createNew);
routes.get("/benefits", NewController.getNews);

module.exports = routes;
