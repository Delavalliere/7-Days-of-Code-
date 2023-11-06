const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const linguagem = prompt("Qual linguagem você está aprendendo?");
const mensagem = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;

alert (mensagem);

const  pergunta = prompt (`'Você gosta de estudar ${linguagem}? Responda com 1 se Sim ou 2 se Não!'`);

    if (pergunta == 1){

        alert ("Que legal! Continue estudando e você terá muito sucesso!")

    }

    if (pergunta == 2){

        alert ("Que pena! Espero que continue se aventurando na programação, quem sabe você não encontra outra linguagem que te agrade? :)")
    }

