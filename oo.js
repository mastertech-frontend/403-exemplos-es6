class Pet{
  constructor(nome, idade, raca, peso){
    this.nome = nome;
    this.idade = idade;
    this.marca = raca;
    this.peso = peso;
  }

  alimentar(comida){
    console.log(`OM NOM NOM QUE DELICIA DE ${comida}`);
  }
}

class Humano{
  constructor(nome){
    this.nome = nome;
    this.pets = [];
  }

  adotarUmPet(nome, raca){
    let novoPet = new Pet(nome, 0, raca, 1);
    this.pets.push(novoPet);
    console.log("eeeeeee adotei um bichim");
  }
}
