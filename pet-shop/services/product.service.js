import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product) {
    const supplier = await SupplierRepository.getSupplier(product.supplier_id);
    if(supplier) {
        return await ProductRepository.insertProduct(product);
    }

    throw new Error("supplier id invalido");
}

async function getProducts() {
    return await ProductRepository.getProducts();
}

async function getProduct(id) {
    return await ProductRepository.getProduct(id);
}

async function deleteProduct(id) {
    return await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
    const supplier = await SupplierRepository.getSupplier(product.supplier_id);
    if(supplier) {
        return await ProductRepository.updateProduct(product);
    }
    throw new Error("supplier id invalido");
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}