import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale) {
    const product = await ProductRepository.getProduct(sale.product_id);
    const client = await ClientRepository.getClient(sale.client_id);
    if(product && client) {
        if(product.stock > 0) {
            sale = await SaleRepository.insertSale(sale);
            product.stock--;
            await ProductRepository.updateProduct(product);
            return sale;
        }
        throw new Error("produto sem estoque");
    }
    
    throw new Error("passe client_id e product_id");
}

async function getSales(productId) {
    if(productId) {
        return await SaleRepository.getSalesByProductId(productId);
    } else {
        return await SaleRepository.getSales();
    }
}

async function getSale(id) {
    return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
    const sale = await SaleRepository.getSale(id);
    if(sale) {
        const product = await ProductRepository.getProduct(sale.product_id);
        product.stock++;
        await SaleRepository.deleteSale(id);
        await ProductRepository.updateProduct(product);
    }
    throw new Error("sale_id não existe");
}

async function updateSale(sale) {
    const product = await ProductRepository.getProduct(sale.product_id);
    const client = await ClientRepository.getClient(sale.client_id);
    if(product && client) {
        return await SaleRepository.updateSale(sale);
    }
    throw new Error("passe client_id e product_id");
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}