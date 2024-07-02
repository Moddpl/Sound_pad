const listaDeTeclas = document.querySelectorAll(".tecla");



function tocarSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
     console.log("Elemento não encontrado ou inexistente");
    }
    
    if (elemento != null && elemento.localName == "audio"){

          elemento.play();
     }
     else {
          console.log("Elemento não é um audio"); 
     }
    }


for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {
     
     const tecla = listaDeTeclas[contador]
     
     const instrumento = tecla.classList[1];
     //template string
     const idAudio = `#som_${instrumento}`;
     
     tecla.onclick = function (){
            tocarSom(idAudio)
     }

     tecla.onkeydown = function (evento){
          
          console.log(evento.code)

          if (evento.code === "Space" || evento.code === "Enter"){
               tecla.classList.add("ativa");
          }
     }
     
     tecla.onKeyup = function (){ 
          tecla.classList.remove("ativa");
     }

}