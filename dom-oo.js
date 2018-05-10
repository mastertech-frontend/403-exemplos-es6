class ObjetoHTML{
  constructor(seletor){
    if(seletor.charAt(0) === "#"){
      this.elemento = document.querySelector(seletor);
    }
    else{
      this.elementos = document.querySelectorAll(seletor);
    }
  }

  mudarFundo(cor){
    if(this.elemento){
      this.elemento.style.backgroundColor = cor;
    }
    else{
      for(let elemento of this.elementos){
        elemento.style.backgroundColor = cor;
      }
    }
  }

  mudarConteudo(conteudo){
    if(this.elemento){
      this.elemento.innerHTML = conteudo;
    }
    else{
      for(let elemento of this.elementos){
        elemento.innerHTML = conteudo;
      }
    }
  }
}


let primeiro = new ObjetoHTML(".teste:first-child");
let ultimo = new ObjetoHTML(".teste:last-child");
let terceiro = new ObjetoHTML(".teste:nth-child(3)");

primeiro.mudarFundo("green");
ultimo.mudarFundo("red");
terceiro.mudarConteudo("Outra coisa dentro");
