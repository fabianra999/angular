"use strict";
/* Tipo de variables primitivas*/
var numeroEstudiante;
var cursoInit = true;
var nombreCuros = 'tesoo';
var nombreCuros2 = "";
var estudiante = [1, 2, 3, 4, 5, 6];
numeroEstudiante = 80;
console.log("numero de estudiantes = " + numeroEstudiante);
/* TypeScript Enums */
var disaSemana;
(function (disaSemana) {
    disaSemana[disaSemana["Lunes"] = 0] = "Lunes";
    disaSemana[disaSemana["Martes"] = 1] = "Martes";
    disaSemana[disaSemana["Miercoles"] = 2] = "Miercoles";
    disaSemana[disaSemana["Jueves"] = 3] = "Jueves";
    disaSemana[disaSemana["Viernes"] = 4] = "Viernes";
})(disaSemana || (disaSemana = {}));
if (disaSemana[0] == 'Lunes') {
    console.log(disaSemana[2]);
}
else {
    console.log(disaSemana[4]);
}
