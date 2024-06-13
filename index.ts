interface IAnimal {
    nome: string;
    idade: number;
    emitirSom(): string;
}

class Animal implements IAnimal {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom(): string { return 'Som emitido'; }
}

class Cachorro extends Animal {
    emitirSom(): string { return 'Au au'; }
}

class Gato extends Animal {
    emitirSom(): string { return 'Miau'; }
}

const animal = new Animal('Animal', 0);
console.log(animal.emitirSom());

const cachorro = new Cachorro('Cachorro', 0);
console.log(cachorro.emitirSom());

const gato = new Gato('Gato', 0);
console.log(gato.emitirSom());

