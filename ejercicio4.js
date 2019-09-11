let calificaciones = 0;
const promedioMinimo = 6
let sumaCalificaciones = 0
let promedio = 0
let numCalificaciones = 0

let alumnos = [{
    nombre: 'Frank',
    calificaciones: [10,9,10,10]
}, {
    nombre: 'Oscar',
    calificaciones: [6,9,6,10]
}, {
    nombre: 'Diego',
    calificaciones: [6,5,6,7]
}, {
    nombre: 'Octavio',
    calificaciones: [6,5,6,7]
}]
//////////////////////////////////////////////////////////////////////////////////

for(let numAlumno = 0; numAlumno < alumnos.length; numAlumno ++){

    for(let index2 = 0; index2 < alumnos[numAlumno].calificaciones.length; index2++){
        sumaCalificaciones += alumnos[numAlumno].calificaciones[index2]
        numCalificaciones ++
    }

    if(numCalificaciones == (alumnos[numAlumno].calificaciones.length)){
        promedio = sumaCalificaciones / numCalificaciones

        if(promedio > promedioMinimo){
            console.log(alumnos[numAlumno].nombre + ' ' + promedio + ' Aprobado')
        }else{
            console.log(alumnos[numAlumno].nombre + ' ' + promedio + ' Reprobado')
        }

    }else{}

    sumaCalificaciones = 0
    numCalificaciones = 0
    
}
