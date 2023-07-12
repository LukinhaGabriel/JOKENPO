const jokenpoOpcoes = ['Pedra', 'Papel', 'Tesoura'];

let computerNumberRandom = Math.floor(Math.random() * (3 - 0)) + 0;
console.log(computerNumberRandom)
console.log('[0] Pedra\n[1] Papel\n[2] Tesoura');
console.log('---------------------------------');
const jogada = 2;
const player = jokenpoOpcoes[jogada];
const computer =  jokenpoOpcoes[computerNumberRandom] ;

if (jogada >= 3){
    console.log('Opção Invalida');
}
else{

    console.log('---------------------------------');
    console.log('Computador jogou', computer)
    console.log('---------------------------------');
    console.log('Jogador Jogou', player)
    console.log('---------------------------------');

    if(jogada == computer){
        console.log('empate');
    }
    else{
        if(jogada == 1 && computerNumberRandom == 0){
            console.log("Jogador Vence") ;   
        }
        if(jogada == 0 && computerNumberRandom == 1){
            console.log("Computador Vence");  
        }   
        if(jogada == 2 && computerNumberRandom == 0){
            console.log("Computador Vence");    
        }
        if(jogada == 0 && computerNumberRandom == 2){
            console.log("Jogador Vence");
        }
        if(jogada == 1 && computerNumberRandom == 2){
            console.log("Computer Vence");
        }    
        if(jogada == 2 && computerNumberRandom == 1){
            console.log("Jogador Vence");
        }
    }
}
        









