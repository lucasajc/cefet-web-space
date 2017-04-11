// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
  
let botao_anterior = document.getElementById("anterior");
let botao_proximo = document.getElementById("proximo");   
let slide = document.getElementById("slide");
let tamanho_slide = todasAsImagens.length;
let slide_atual = 0;

botao_anterior.addEventListener('click', function anterior(e) {
	if(slide_atual===tamanho_slide-1){
		slide_atual = 0;
	}
	else{
		slide_atual++;
	}
	
	slide.src= servidorDasImagens + todasAsImagens[slide_atual];
});

botao_proximo.addEventListener('click', function proximo(e) {
	if(slide_atual===0){
		slide_atual = tamanho_slide-1;
	}
	else{
		slide_atual--;
	}
	slide.src= servidorDasImagens + todasAsImagens[slide_atual];
});