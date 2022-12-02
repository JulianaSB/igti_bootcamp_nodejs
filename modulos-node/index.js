// "as" é o apelido do metodo
import { promises as fs } from "fs";

// *************** Utilizando async/await nas promisses  *************** 
init();
writeReadJson();

async function init() {
    try {
        await fs.writeFile("teste.txt", "opa opa");
        await fs.appendFile("teste.txt", "\ntestando o arquivo");
        const data = await fs.readFile("teste.txt", "utf-8");
        console.log("arquivo escrito", data);
    } catch (error) {
        console.log(error);
    }
}

async function writeReadJson() {
    try {
        //definição dos valores que serão inseridos no arquivo
        const arrayCarros = ['Uno', 'Celta', 'Prisma'];
        const objCarros = { carros: arrayCarros };

        //inserção no arquivo
        //JSON.stringify converte os valores pra string
        //JSON.parse converte os valores para json
        await fs.writeFile("teste.json", JSON.stringify(objCarros));
        const data = JSON.parse(await fs.readFile("teste.json"));

        //alteração do conteudo
        data.carros.push('Palio');
        console.log("arquivo escrito", data);

        //sobrescrevendo o arquivo com os valores novos
        await fs.writeFile("teste.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

// *************** Utilizando .then() nas promisses  *************** 
/* fs.writeFile("teste.txt", "opa opa").then(() => {
    fs.appendFile("teste.txt", "\ntestando o arquivo").then(() => {
        fs.readFile("teste.txt", "utf-8").then((result) => {
            console.log("arquivo escrito", result);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
}); */



// *************** Utilizando callbacks *************** 
//import fs from "fs";
// writeFile sempre sobrescreve os valores do arquivo
// primeiro parametro da writeFile = nome do arquivo, se não existir ele cria o arquivo
// segundo parametro da writeFile = conteudo q vai ser escrito
// terceiro parametro da writeFile uma callback pra retornar o erro

/* fs.writeFile("teste.txt", "bla bla bla", function(err) {
    if (err) {
        console.log(err);
    } else {
        // appendFile acrescenta os valores no arquivo
        fs.appendFile("teste.txt", " \nopa vamo time", function(err, data) {
            if (err) {
                console.log(err);
            } else {
                fs.readFile("teste.txt", "utf-8", function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("arquivo escrito com sucesso", data);
                    }            
                })
            }            
        });
    }
}); */


// *************** Utilizando de forma sincrona ***************
// (não recomendado por travar a operação em casa parte sincrona)
/* try {
    console.log('1');
    fs.writeFileSync("teste.txt", "blabla");
    console.log('2');
    const data = fs.readFileSync("teste.txt", "utf-8");
    console.log(data);
    console.log('3'); 
} catch (error) {
    console.log(error); 
}; */