class Pet{
  constructor(nome, idade, raca, peso){
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.peso = peso;
  }

  alimentar(comida, peso){
    this.peso += peso;
    console.log(`OM NOM NOM QUE DELICIA DE ${comida}`);
  }
}

class Cachorro extends Pet{
  constructor(nome, idade, raca, peso){
    super(nome, idade, raca, peso);
    this.amor = true;
  }

  alimentar(comida, peso){
    super.alimentar(comida, peso);
    console.log("DISCLAIMER: a frase não foi dita pelo cachorro.");
  }

  latir(){
    if(this.raca === "Pinscher"){
      console.log("wawawawawawawawawawawawawawawawawaw");
    }
    else if(this.raca === "Chihuahua"){
      console.log("Chihuahuahuahuahuahuahuahuahuahuehaushauehaushauhe");
    }
    else{
      console.log("WOOF");
    }
  }
}
