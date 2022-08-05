const button = document.getElementById('button');
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;


function adicionarNumero(numero1: number, numero2: number, devePrintar:boolean, frase: string) {
let resultado = numero1 + numero2

if (devePrintar) {
   // console.log(numero1+numero2)
  console.log(frase+resultado)

}
 return numero1 + numero2
}

let devePrintar = true;
let frase = 'O valor é:  '

if (button) {
  button.addEventListener('click', () => {
   if (input1 && input2) {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
  
   }
})
}
