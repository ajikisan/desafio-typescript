// Criação de enumerador
enum Trabalho {
  Tecnologa,
  Administradora,
  Hunter,
  Desenvolvedor
  }

type Humano = {
nome : string,
idade : number,
profissao: Trabalho
}

let pessoal : Humano = {
nome: "Mirian",
idade: 26,
profissao: Trabalho.Tecnologa

}

let pessoa2 : Humano = {
nome : 'San',
idade : 25,
profissao: Trabalho.Administradora
}

let pessoa3: Humano = {
nome: 'Olaf',
idade: 9,
profissao: Trabalho.Hunter
}


let pessoa4: Humano = {
nome: "Ronaldo",
idade: 32,
profissao: Trabalho.Desenvolvedor

}

