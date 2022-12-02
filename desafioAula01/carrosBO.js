// "as" é o apelido do metodo
import { promises as fs } from "fs";

async function countModelsCarMax() {
    const data = JSON.parse(await fs.readFile("public/car-list.json", "utf-8"));

    let result = {
        marca: '',
        quantidade: 0
    };

    for (let index = 0; index < data.length; index++) {
        if(data[index].models.length > result.quantidade) {
            result = {
                marca: data[index].brand,
                quantidade: data[index].models.length
            }
        } 
        // else if(data[index].models.length === result.quantidade) {
        //     result = {
        //         marca: [result.marca, data[index].brand],
        //         quantidade: [result.quantidade, data[index].models.length]
        //     }
        // }
        
    }
    return result;
}

async function countModelsCarMin() {
    const data = JSON.parse(await fs.readFile("public/car-list.json", "utf-8")); 

    let result = {
        marca: '',
        quantidade: 10000
    };

    for (let index = 0; index < data.length; index++) {
        if(data[index].models.length < result.quantidade) {
            result = {
                marca: data[index].brand,
                quantidade: data[index].models.length
            }
        } 
        // else if(data[index].models.length === result.quantidade) {
        //     result = {
        //         marca: [result.marca, data[index].brand],
        //         quantidade: [result.quantidade, data[index].models.length]
        //     }
        // }
        
    }
    return result;
}

async function countModelsCarParametersMax(count) {
    const data = JSON.parse(await fs.readFile("public/car-list.json", "utf-8"));
    data.sort(function(a,b) {
        return a.models.length < b.models.length ? -1 : a.models.length > b.models.length ? 1 : 0;
    }); 

    data.reverse();

    let result = [];

    for (let index = 0; index < count; index++) {
            result.push(`${data[index].brand} - ${data[index].models.length}`);        
    }
    return result;
}

async function countModelsCarParametersMin(count) {
    const data = JSON.parse(await fs.readFile("public/car-list.json", "utf-8"));
    data.sort(function(a,b) {
        return a.models.length < b.models.length ? -1 : a.models.length > b.models.length ? 1 : 0;
    });

    let result = [];

    for (let index = 0; index < count; index++) {
            result.push(`${data[index].brand} - ${data[index].models.length}`);        
    }
    return result;
}

async function modelsCarParameters(brand) {
    const data = JSON.parse(await fs.readFile("public/car-list.json", "utf-8"));
    const dataFilter = data.filter(index => index.brand.toUpperCase() === brand.nomeMarca.toUpperCase());

    let result = dataFilter.length > 0 ? dataFilter[0].models : [];

    return result;
}

export default {
    countModelsCarMax, 
    countModelsCarMin, 
    countModelsCarParametersMax,
    countModelsCarParametersMin,
    modelsCarParameters
}
