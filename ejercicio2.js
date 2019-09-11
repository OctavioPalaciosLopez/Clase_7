const asistencia = [0,1,0,1,0,0,0,1,0,0]
let porcentajeAsistencia = 0
let numFaltas = 0

for(let contador = 0; contador <= asistencia.length; contador++){
    if(asistencia[contador] === 0){
        numFaltas ++
    }else{}
}
porcentajeAsistencia = (numFaltas*100)/asistencia.length
console.log(porcentajeAsistencia + '%')
/*if(promedio >= promedioMinimo){
    
}
else{
    console.log('Reprobado')
}*/