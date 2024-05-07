let vitorias = 0;
let derrotas = 0;

function calculo_rank(pontuacao) {
  let nivel;
  if (pontuacao <= 10) {
    nivel = "Ferro";
  }
  else if (pontuacao > 10 && pontuacao <= 20) {
    nivel = "Bronze";
  }
  else if (pontuacao > 20 && pontuacao <= 50) {
    nivel = "Prata";
  }
  else if (pontuacao > 50 && pontuacao <= 80) {
    nivel = "Ouro";
  }
  else if (pontuacao > 80 && pontuacao <= 90) {
    nivel = "Diamante";
  }
  else if (pontuacao > 90 && pontuacao <= 100) {
    nivel = "Lendário";
  }
  else if (pontuacao >= 101) {
    nivel = "Imortal";
  }
  return nivel
}

function classificacao(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = calculo_rank(saldoVitorias)
  return console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

for(i = 0; i< 200; i++){
  let resutado = Math.floor(Math.random() * 2);
  if(resutado == 1){
    vitorias++;
  }else{
    derrotas++;
  }
}
classificacao(vitorias, derrotas)