/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primernumero;
	var segundonumero;
	var tercernumero;
	var suma;

	primernumero=parseInt(document.getElementById('PrecioUno').value);
	segundonumero=parseInt(document.getElementById('PrecioDos').value);
	tercernumero=parseInt(document.getElementById('PrecioTres').value);

	suma=primernumero+segundonumero+tercernumero;

	alert("El total de la suma es: "+suma);
}
function Promedio () 
{
	var primernumero;
	var segundonumero;
	var tercernumero;
	var promedio;

	primernumero=parseInt(document.getElementById('PrecioUno').value);
	segundonumero=parseInt(document.getElementById('PrecioDos').value);
	tercernumero=parseInt(document.getElementById('PrecioTres').value);
	
	promedio=(primernumero+segundonumero+tercernumero)/3;

	alert("El promedio es: " +promedio);

	
}
function PrecioFinal () 
{
	var primernumero;
	var segundonumero;
	var tercernumero;
	var PrecioFinal;

	primernumero=parseInt(document.getElementById('PrecioUno').value);
	segundonumero=parseInt(document.getElementById('PrecioDos').value);
	tercernumero=parseInt(document.getElementById('PrecioTres').value);
	
	PrecioFinal=((primernumero+segundonumero+tercernumero)*1.21);

	alert("El PrecioFinal es: " +PrecioFinal);

}