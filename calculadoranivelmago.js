function calcularNivelMundoBruxo(vitorias,derrotas,nomeDoBruxo){
    let pontosDeMagia = vitorias - derrotas;
    let nivel;
    if(vitorias<=10){
       nivel = "Aprendiz";
    } else if(vitorias>=11 && vitorias <=30){
       nivel = "Arcano";
    } else if(vitorias>=31 && vitorias <=50){
        nivel = "Feiticeiro";
    } else if(vitorias>=51 && vitorias <=60){
        nivel = "Mestre dos Magos";
    } else if(vitorias>=61 && vitorias <=80){
        nivel = "Avatar Arcano";
    } else {
        nivel = "Avatar supremo da magia";
    }
    return "O bruxo " + nomeDoBruxo + " possui " + pontosDeMagia + " pontos de magia e é classificado como: " + nivel;
}
let resultado = calcularNivelMundoBruxo(50, 40, "Neville");
let resultado1 = calcularNivelMundoBruxo(75, 20, "Hermione");
let resultado2 = calcularNivelMundoBruxo(60, 10, "Harry Potter");
console.log(resultado);
console.log(resultado1);
console.log(resultado2);    