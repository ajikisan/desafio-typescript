// 1ª Resposta - Os objetos vão manter as propriedades com que foram inicializados
const funcionario = {
  codigo:10,
  nome:'John'
};


//2ª Resposta
const funcionario2: {codigo: number, nome:string} = {
  codigo: 10,
  nome:'John'
}

//3ª Resposta
interface Funcionario {
codigo: number,
nome: string
}

const funcionarioObjeto = {} as Funcionario;
funcionarioObjeto.codigo=10;
funcionarioObjeto.nome='John';

const funcionarioObjeto2:Funcionario = {
  codigo:10,
  nome:'John'
}

