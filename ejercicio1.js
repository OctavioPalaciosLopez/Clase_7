const calificacionesLista = [8,7.9,8]
const promedioMinimo = 8
let sumaCalificaciones = 0

for(let calificacion = 0; calificacion < calificacionesLista.length; calificacion++){
    sumaCalificaciones += calificacionesLista[calificacion]
}
const promedio = sumaCalificaciones / calificacionesLista.length

if(promedio >= promedioMinimo){
    console.log('Aprobado')
}
else{
    console.log('Reprobado')
}