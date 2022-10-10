import saludar, { PI, usuario, password } from "./constantes.js";
import { aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario, password);

console.log(aritmetica.sumar(1, 2));
console.log(aritmetica.restar(5, 2));
saludar();
