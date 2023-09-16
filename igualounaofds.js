const comprouLeite = true;
const comprouBolacha = false;

const diogoCumpriuMissao = comprouLeite === true && comprouBolacha === true;

if (diogoCumpriuMissao){
    console.log('sim');
}else{
    console.log('não');
}

const diogoFezAlgo = comprouLeite || comprouBolacha;

if(diogoFezAlgo){
    console.log("diogo fez algo")
}else{
    console.log('diogo é inutil')
}