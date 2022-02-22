
var imagenes = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
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