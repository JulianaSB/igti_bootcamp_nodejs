import op from "./operacoes.js";
import multiplicacao from "./multiplicacao.js";
import { divisao, resto } from "./exportacaoNomeada.js"

console.log(op.soma(2,3));
console.log(op.subtracao(5,3));
console.log(op.nome);
console.log(multiplicacao(2,3));
console.log(divisao(9,3));
console.log(resto(13,3));