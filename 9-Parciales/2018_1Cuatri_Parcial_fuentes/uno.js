
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=parseInt(prompt(" Ingrese el ancho "));
	largo=parseInt(prompt(" Ingrese el largo "));

	perimetro=2*(ancho+largo);

	alert(" El perimetro es " +perimetro);
}
