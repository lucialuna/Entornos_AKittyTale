
var imagenes = ['1.png','2.png','3.png','4.png','5.png'];
var cont = 0;

function carrusel(){


	if(cont==imagenes.length){
		cont = 0;
	}
 	document.getElementById("banner").src = imagenes[cont];
 	cont++;


}

function imagenZoom(elemento){

	imagen.width+=250;

}

function restablecerZoom(elemento){

	imagen.style="";

}

function sombrear(elemento,color){

	thiscuadro.style="background-color:"+color+";";
}