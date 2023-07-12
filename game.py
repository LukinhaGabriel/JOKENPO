import random

jokenpoOpcoes = ['Pedra', 'Papel', 'Tesoura']

computerNumberRandom = random.randint(0,2)
print('[0] Pedra\n[1] Papel\n[2] Tesoura')
print('---------------------------------')
jogada = int(input('Qual a sua Jogada: '))

if jogada >= 3:
    print('Opção Invalida')

else:
    player = jokenpoOpcoes[jogada]
    computer =  jokenpoOpcoes[computerNumberRandom] 
    print('---------------------------------')
    print('Computador jogou', computer)
    print('---------------------------------')
    print('Jogador Jogou', player)
    print('---------------------------------')

    if(jogada == computer):
        print('empate')

    else:
        if  jogada == 1 and computerNumberRandom == 0:
            print("Jogador Vence")    
        
        if jogada == 0 and computerNumberRandom == 1:
            print("Computador Vence")    
        
        if jogada == 2 and computerNumberRandom == 0:
            print("Computador Vence")    
        
        if jogada == 0 and computerNumberRandom == 2:
            print("Jogador Vence")

        if jogada == 1 and computerNumberRandom == 2:
            print("Computer Vence")
        
        if jogada == 2 and computerNumberRandom == 1:
            print("Jogador Vence")
    

        











