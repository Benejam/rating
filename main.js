let icons=document.querySelectorAll(".fas");// convertir en nodelist  todos los elementos class "fas"
icons=Array.from(icons) // convierte nodelist en array
console.log(icons)

//aqui comprovam dins s'element rating, si lo que clickam es un icone o no
document.getElementById('rating').onclick = function (e) {
  if (icons.includes(e.target)) {
    //Si ho es, no fa res, deixa que faixi ses funcions de cada un des icones
    console.log("clicando un icono")
  } else {
    //si no apretes damunt icono, fa sa funcio de borrar
    outEffect()
  }
}  


for (let icon of icons){ // cada "icon" de la array se le aplican las funciones de la array "icons"
  icon.addEventListener("mouseover",changeColor)
  icon.onclick=clickEffect;
  icon.addEventListener("mouseout",backColor);
}

function changeColor(event){ // para optener el target donde se esta aplicando el evento
	let target= event.target;//
	let targetindex=icons.indexOf(target)// indexOf se utiliza para optener la posición del target dentro de la array
	for (var i = 0; i <= targetindex; i++) { // se aplica el bucle hasta el target
	icons[i].classList.remove("orange");//
    icons[i].classList.add("yellow");
	}
}
function backColor(event){
	let target= event.target;
	let targetindex=icons.indexOf(target)
	for (var i = 0; i <= targetindex; i++) {
	icons[i].classList.remove("yellow");
    icons[i].classList.add("orange");
	}
}

function clickEffect(event){
  console.log("maria")
	let target= event.target;
	let targetindex=icons.indexOf(target)
	for (var i = 0; i <= targetindex; i++) {
	target.removeEventListener("mouseout",backColor);
	icons[i].classList.remove("orange");
    icons[i].classList.add("yellow");
	}
	for (var i = targetindex +1; i<icons.length; i++) {
	icons[i].classList.remove("yellow");
    icons[i].classList.add("orange");
	}

}
function outEffect (){
  //AQUESTA FUNCIÓ LO UNIC QUE FA ES BORRAR TOTES
	for (var i = 0; i <= icons.length; i++){
	icons[i].classList.remove("yellow");
	icons[i].classList.add("orange");        
}	
}

	

 
