import express from "express";
import carrosBO from "./carrosBO.js";

const app = express();

//app.use significa q toda requisição que chegar vai usar oq tiver dentro do app.use
app.use(express.json());


app.listen(8080, () => {
    console.log("api started");
})

app.get("/marcas/maisModelos", async (req, res) => {
    try {
        const result = await carrosBO.countModelsCarMax();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("Ocorre erro")
    }
});

app.get("/marcas/menosModelos", async (req, res) => {
    try {
        const result = await carrosBO.countModelsCarMin();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("Ocorre erro")
    }
});

app.get("/marcas/listaMaisModelos/:count", async (req, res) => {
    try {
        const result = await carrosBO.countModelsCarParametersMax(req.params.count);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("Ocorre erro")
    }
});

app.get("/marcas/listaMenosModelos/:count", async (req, res) => {
    try {
        const result = await carrosBO.countModelsCarParametersMin(req.params.count);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send("Ocorre erro")
    }
});

app.post("/marcas/listaModelos", async (req, res) => {
    try {
        const result = await carrosBO.modelsCarParameters(req.body);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err)
    }
});