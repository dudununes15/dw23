const pessoa = 'lucas';
const idade = 18;
const investimento1 = 10000;
const investimento2 = 50000;
const vegano = true;
const vegetarino = false;

if (idade >= 18){
    console.log('O '+ pessoa + ' é maior de idade');
}else{
    console.log('O '+ pessoa + ' não é maior de idade')
}

if(investimento1 + investimento2 > 100000){
    console.log('O ' + pessoa + ' é um investidor qualificado')
} else {
    console.log('O ' + pessoa + ' não é um investidor qualificado')
}

const condiçao = vegano || vegetarino;

if (condiçao){
    console.log('O ' + pessoa + ' possui restição alimentar')
}else{
    console.log('O ' + pessoa + ' não possui restição alimentar')
}
