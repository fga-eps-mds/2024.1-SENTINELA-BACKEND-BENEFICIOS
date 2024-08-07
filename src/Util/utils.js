const validator = (dados) => {
    console.log("Validator");

    if (typeof dados.nome !== "string" || dados.nome === "") {
        return "Nome inválido";
    }

    if (typeof dados.razaoSocial !== "string" || dados.razaoSocial === "") {
        return "Nome inválido";
    }

    return null;
};

module.exports = {
    validator,
};
