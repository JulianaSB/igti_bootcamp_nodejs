import ProductService from "../services/product.service.js"

async function createProduct(req, res, next) {
    try {
        let product = req.body;
        if (
            !product.name ||
            !product.description ||
            !product.value ||
            !product.stock ||
            !product.supplier_id
        ) {
            throw new Error("Todos os campos são obrigatórios");
        }

        product = res.send(await ProductService.createProduct(product));
        logger.info(`POST /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function getProducts(req, res, next) {
    try {
        res.send(await ProductService.getProducts());
        logger.info(`GET /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function getProduct(req, res, next) {
    try {
        res.send(await ProductService.getProduct(req.params.id));
        logger.info(`GET /product/id - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function deleteProduct(req, res, next) {
    try {
        res.send(await ProductService.deleteProduct(req.params.id));
        logger.info(`DELETE /product/id - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        let product = req.body;
        if (
            !product.product_id ||
            !product.name ||
            !product.description ||
            !product.value ||
            !product.stock ||
            !product.supplier_id
        ) {
            throw new Error("Todos os campos são obrigatórios");
        }

        product = res.send(await ProductService.updateProduct(product));
        logger.info(`PUT /product - ${JSON.stringify(product)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}