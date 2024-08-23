const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("../routes");
const BenefitsModel = require("../Models/benefitsFormSchema");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = express();
let mongoServer;

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Aplicar o middleware antes das rotas
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/", routes);

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("BenefitsForm Controller Tests", () => {
    const mockedBenefit = {
        nome: "Health Benefits",
        razaoSocial: "Empresa Saúde S/A",
        statusConvenio: "Ativo",
        considerarIr: "Sim",
        descontoAut: "Não",
    };

    it("should create a new benefit", async () => {
        const res = await request(app)
            .post("/benefits/create")
            .send(mockedBenefit);

        expect(res.status).toBe(201);
    });

    it("should get benefit by id", async () => {
        const { body: createdBenefit } = await request(app)
            .post("/benefits/create")
            .send({
                ...mockedBenefit,
                nome: "Get By ID Mock",
            });

        const res = await request(app).get(`/benefits/${createdBenefit._id}`);

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject(createdBenefit);
    });

    it("should get benefits", async () => {
        const benefitsModelCount = await BenefitsModel.countDocuments({});
        const res = await request(app).get("/benefits");

        expect(res.status).toBe(200);
        expect(res.body.length).toBe(benefitsModelCount);
    });

    it("should delete benefit", async () => {
        const { body: createdBenefit } = await request(app)
            .post("/benefits/create")
            .send({
                ...mockedBenefit,
                nome: "Delete By ID Mock",
            });

        const res = await request(app).delete(
            `/benefits/delete/${createdBenefit._id}`
        );

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject(createdBenefit);
    });

    it("should update benefit", async () => {
        const { body: createdBenefit } = await request(app)
            .post("/benefits/create")
            .send({
                ...mockedBenefit,
                nome: "Update By ID Mock",
            });

        const res = await request(app).patch(
            `/benefits/update/${createdBenefit._id}`
        );

        expect(res.status).toBe(200);
    });
});
