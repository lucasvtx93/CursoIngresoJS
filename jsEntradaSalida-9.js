/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var Sueldo;
	var Resultado;

	Sueldo = document.getElementById('sueldo').value;
	Resultado =parseInt(Sueldo * 1.1);
	
	document.getElementById('resultado').value = Resultado;

}
