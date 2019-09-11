let calificaciones = 0;
const calificacionMinimo = 6
let totalMarterias = ''
let numMaterias = 0



let alumnos = [{
    nombre: 'Frank',
    materias: [{materia:'Matematicas', calificacion:8}, {materia:'Español', calificacion:10},
               {materia:'Ciencias', calificacion:5}]
    
}, {
    nombre: 'Oscar',
    materias: [{materia:'Matematicas', calificacion:10}, {materia:'Español', calificacion:5},
               {materia:'Ciencias', calificacion:10}]
}, {
    nombre: 'Diego',
    materias: [{materia:'Matematicas', calificacion:4}, {materia:'Español', calificacion:10},
               {materia:'Ciencias', calificacion:10}]
}, {
    nombre: 'Octavio',
    materias: [{materia:'Matematicas', calificacion:1}, {materia:'Español', calificacion:10},
               {materia:'Ciencias', calificacion:1}]
}]
//////////////////////////////////////////////////////////////////////////////////

for(let numAlumno = 0; numAlumno < alumnos.length; numAlumno ++){

    for(let index2 = 0; index2 < alumnos[numAlumno].materias.length; index2++){

        if(alumnos[numAlumno].materias[index2].calificacion < calificacionMinimo){
            totalMarterias += alumnos[numAlumno].materias[index2].materia + ' '
            
        }else{}
    } 
    if(totalMarterias != ''){
        console.log(alumnos[numAlumno].nombre + ' ' + totalMarterias )
        totalMarterias = ''
    }else{}  
}
