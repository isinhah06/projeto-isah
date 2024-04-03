const botoes = docoment. querySelectorAll(".botao");
const botoes = docoment. querySelectorAll(".aba-conteudo");
for(let i=0; i<botoes.length; i++){
botoes[i].oneclick = function(){
    for(let j=0; i<botoes.length; j++){
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("atuvo");   
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");

}
}