/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Centígrados

	Fahrenheit=parseInt(document.getElementById('Temperatura').value);
	Centígrados=(Fahrenheit-32)*5/9;

	alert(+Fahrenheit+ " Fahrenheit son " +Centígrados+ " Centígrados ");

}

function CentigradosFahrenheit () 
{
	var Fahrenheit;
	var Centígrados

	Centígrados=parseInt(document.getElementById('Temperatura').value);
	Fahrenheit=(Centígrados*9/5) + 32


	alert(+Centígrados+ " Centígrados son " +Fahrenheit+ " Fahrenheit ");

}
