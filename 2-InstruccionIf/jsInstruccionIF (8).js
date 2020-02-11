function mostrar()
{
	var edad;
	var estadocivil;

	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;

	if(edad>18 && estadocivil=="soltero")
	{
		alert("es soltero y es mayor");
	}
}//FIN DE LA FUNCIÓN