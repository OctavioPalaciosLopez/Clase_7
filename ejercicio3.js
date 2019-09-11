const calificacionesExamenes = [8,6.9,9,7,10]
const calificacionMinima = 6
let repetirExamen = 0

for(let calificacion = 0; calificacion < calificacionesExamenes.length; calificacion++){
    if(calificacionesExamenes[calificacion] < 7){
        repetirExamen ++
    }else{}
}
console.log('Tienes que repetir: '+ repetirExamen + ' examenes')
