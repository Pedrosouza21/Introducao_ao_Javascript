/* function 

 function somar (x1, x2) {
  
    return x1 + x2;
 }

  let resultado = somar(1,2);
  console.log(resultado);
  
*/

/* function Calc 
function calc(x1, x2) {
 
   return eval `${x1} ${operator} ${x2}`;
}

 let resultado = somar(1, 2, "+");
 console.log(resultado);

*/

/* function Anonima
  (function calc(x1, x2,operator) {
  
    return eval `${x1} ${operator} ${x2}`;

 })(1,2, "*");

 let resultado = somar(1, 2, "+");
  console.log(resultado);

*/


/* function 
 let calc(x1, x2,operator) =>  {
    return eval `${x1} ${operator} ${x2}`;

 })(1,2, "*");

 let resultado = somar(1, 2, "+");
  console.log(resultado);
*/


/*Eventos */

window.addEventListener('focus', event => {
   console.log("focus");

});

document.addEventListener('click', event => {
   console.log('click');

});

/* Datas */
let agora = new Date();
console.log(agora.getDate());
console.log(agora.getMonth());
console.log(agora.getFullYear());
console.log(agora.toLocaleDateString("pt-BR"));

/* Array */
let carros = ["palio 98", "toro", "uno", 9, true, new Date(), function () { }];
console.log(carros[2]);


carros.forEach(function (value, index) {

   console.log(index, value);
})

/* Teste proposto pela Aula */
let pedro = [" código", "esporte", "música", "cozinha"];
console.log(pedro[2]);




/* Toda vez que um "."  for adicionado, quer dizer que tenho um objeto(método ou atributo)*/

let celular = function () {

   this.cor = "preto";

   this.ligar = function () {
      console.log("uma ligação");
      return "ligando";

   }
}



let objeto = new celular();
console.log(objeto);