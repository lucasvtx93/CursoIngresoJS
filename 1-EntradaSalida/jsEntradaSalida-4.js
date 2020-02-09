/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var dato;//variable

	dato=prompt("ingrese su nombre");//tomo nombre en variable.

	document.getElementById('elNombre').value=dato;//devuelvo dato ingresado.


}

