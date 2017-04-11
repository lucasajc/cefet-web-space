// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botoes = document.getElementsByClassName("botao-expandir-retrair");

for (let botao of botoes) {
  botao.addEventListener('click', function retrair_expandir(e) {
	 
	let paragrafo = botao.parentNode;
	
	if(paragrafo.classList.contains('expandido')){
		paragrafo.classList.remove('expandido');
	}
	else{
		paragrafo.classList.add('expandido');
	}
  });
}


