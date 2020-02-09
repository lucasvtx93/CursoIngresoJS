/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{

	var primernumero;//defino variables
	var segundonumero;
	var restar	;

	primernumero=document.getElementById('numeroUno').value;//tomo primer numero
	segundonumero=document.getElementById('numeroDos').value;//tomo segundo numero

	primernumero = parseInt(primernumero);//transformo a enteros.
	segundonumero= parseInt(segundonumero);

	restar=primernumero-segundonumero;//realizo operacion.

	alert (' reultado de la resta ' +restar);//muestro el resultado de la operacion.

}

function multiplicar()
{ 
	var primernumero;//defino variables
	var segundonumero;
	var multiplicar	;

	primernumero=document.getElementById('numeroUno').value;//tomo primer numero
	segundonumero=document.getElementById('numeroDos').value;//tomo segundo numero

	primernumero = parseInt(primernumero);//transformo a enteros.
	segundonumero= parseInt(segundonumero);

	multiplicar=primernumero*segundonumero;//realizo operacion.

	alert (' reultado de la multiplicacion ' +multiplicar);//muestro el resultado de la operacion.

}

function dividir()
{
	var primernumero;//defino variables
	var segundonumero;
	var dividir	;

	primernumero=document.getElementById('numeroUno').value;//tomo primer numero
	segundonumero=document.getElementById('numeroDos').value;//tomo segundo numero

	primernumero = parseInt(primernumero);//transformo a enteros.
	segundonumero= parseInt(segundonumero);

	dividir=primernumero/segundonumero;//realizo operacion.

	alert (' reultado de la divicion ' +dividir);//muestro el resultado de la operacion.

}

