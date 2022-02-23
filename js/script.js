
var imagenes = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
var cont = 0;

function carrusel(){


	if(cont==imagenes.length){
		cont = 0;
	}
 	document.getElementById("banner").src = imagenes[cont];
 	cont++;


}

function imagenZoom(elemento){
	elemento.width+=250;

}

function restablecerZoom(elemento){
	elemento.width-=250;
}

function sombrear(elemento,color){
	elemento.style+="background-color:"+color+";";
}