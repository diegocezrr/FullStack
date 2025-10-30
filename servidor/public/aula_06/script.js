// let titulo = document.getElementById("titulo").innerHTML;
// console.log(titulo)


// document.getElementById("nome").innerHTML = "Diego";

// let nome = window.prompt("Qual o seu Nome?");
// let idade = window.prompt("Qual a sua Idade?");
// let ano = window.prompt("Qual o Ano Atual?");
// let nascimento = ano - idade

// let resposta = "Olá " + nome + ", O seu Ano de Nascimento é " + nascimento;

// document.getElementById("resposta_e1").innerHTML = resposta;


// function exibeMensagem(){
//     console.log("Olá, Mundo!")
// }
// function exibeMensagemComParametro(texto){
//     console.log(texto)
// }

// exibeMensagem();
// exibeMensagem();
// exibeMensagem();
// exibeMensagemComParametro("Texto 1");
// exibeMensagemComParametro("Texto 2");
// exibeMensagemComParametro("Texto 3");


function soma(a, b){
    let c = a + b;
    return c;
}

// console.log(7 + " + " + 8 + " = " + soma(7,8));
// console.log(7 + " + " + 9 + " = " + soma(7,9));
// console.log(3 + " + " + 8 + " = " + soma(3,8));


// soma(7,8)
// soma(7,9)
// soma(3,8)

function imprimirMensagem(){
    let texto = document.getElementById("ipt_text").value;
    console.log(texto);
}

function imprimeIncremento(){
    let x = parseInt(document.getElementById("ipt_number").value)

    document.getElementById("resposta_e2").innerHTML = "";
    for (let i = 0; i < x; i++){
        console.log(i);
        let resposta = document.getElementById("resposta_e2").innerHTML + " " + i
        document.getElementById("resposta_e2").innerHTML = resposta
}
}

function imprimeSoma(){
    let a = parseInt(document.getElementById("ipt_number_1").value);
    let b = parseInt(document.getElementById("ipt_number_2").value);

    let c = soma(a,b);
    document.getElementById("resposta_e3").innerHTML = c 
}

function imprimeCalculo(){
    
}


