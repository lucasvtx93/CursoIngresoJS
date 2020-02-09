function mostrar()
{
	var precio;
	var descuento;
	var resultado;

	precio=parseInt(prompt("Ingrese el precio"));
	descuento=parseInt(prompt("Ingrese el descuento a aplicar"));

	resultado=precio - (precio * descuento/100);

	document.getElementById('elPrecioFinal').value=resultado;
	
}
