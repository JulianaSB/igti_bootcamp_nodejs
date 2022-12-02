import AnimalService from "../services/animal.service.js"

async function createAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (
            !animal.nome ||
            !animal.tipo ||
            !animal.proprietario_id
        ) {
            throw new Error("Todos os campos são obrigatórios");
        }

        animal = res.send(await AnimalService.createAnimal(animal));
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimals(req, res, next) {
    try {
        res.send(await AnimalService.getAnimals(req.query.proprietario_id));
        logger.info(`GET /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next) {
    try {
        res.send(await AnimalService.getAnimal(req.params.id));
        logger.info(`GET /animal/id - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next) {
    try {
        res.send(await AnimalService.deleteAnimal(req.params.id));
        logger.info(`DELETE /animal/id - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (
            !animal.nome ||
            !animal.tipo ||
            !animal.proprietario_id
        ) {
            throw new Error("Todos os campos são obrigatórios");
        }

        animal = res.send(await AnimalService.updateAnimal(animal));
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}