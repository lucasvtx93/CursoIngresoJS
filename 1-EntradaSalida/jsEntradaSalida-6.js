/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var primernumero;//defino variables
var segundonumero;
var sumar;

primernumero=document.getElementById('numeroUno').value;//tomo primer numero
segundonumero=document.getElementById('numeroDos').value;//tomo segundo numero

primernumero = parseInt(primernumero);//transformo a enteros.
segundonumero= parseInt(segundonumero);

sumar=primernumero+segundonumero;//realizo operacion.

alert ('reultado de la suma ' +sumar);//muestro el resultado de la operacion.

}

