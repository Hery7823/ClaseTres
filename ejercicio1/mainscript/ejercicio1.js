let nota1, nota2, nota3, notas_parciales_55, examen_final_30, trabajo_final_15, califica_final;
nota1=prompt(" Ingresa la Nota Uno entre 1 y 5");
nota2=prompt(" Ingresa la Nota Dos entre 1 y 5");
nota3=prompt(" Ingresa la Nota Tres entre 1 y 5");
examen_final_30=prompt(" Ingresa examen Final 30% entre 1 y 5");
trabajo_final_15=prompt(" Ingresa Trabajo Final 15% entre 1 y 5");
notas_parciales_55=((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3) * 0.55;
califica_final= notas_parciales_55 + (parseFloat(examen_final_30) * 0.3) + (parseFloat(trabajo_final_15) * 0.15); 
alert("Tu Calificacio Final es de: "+califica_final);




