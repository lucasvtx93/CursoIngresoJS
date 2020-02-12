function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	nota=Math.floor((Math.random() * 10) + 1);

	console.log(nota);

	if(nota>8)
	{
		alert("EXELENTE");
	}
	else
		{
		if(nota<5)
			alert("vamos la proxima se puede");
		else
			{
			alert("aprobo");
			}
		}


}//FIN DE LA FUNCIÓN