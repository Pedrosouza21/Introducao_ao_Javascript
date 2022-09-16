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