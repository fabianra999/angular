/* Tipo de variables primitivas*/
let numeroEstudiante:number;
let cursoInit:boolean = true; 
let nombreCuros:string= 'tesoo';
let nombreCuros2:string= ``;
let estudiante: number[] = [1,2,3,4,5,6];

numeroEstudiante= 80;
console.log(`numero de estudiantes = ${numeroEstudiante}`);

/* TypeScript Enums */

enum disaSemana {
'Lunes', 'Martes','Miercoles','Jueves','Viernes'
}

if (disaSemana[0] == 'Lunes') {
    console.log(disaSemana[2]);
}  else {
    console.log(disaSemana[4]);
}