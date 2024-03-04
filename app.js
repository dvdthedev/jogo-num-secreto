//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto'

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um número de 1 a 10'

let numSorteados = []
let quantidadeNumerosAleatorios = 13
let numSecreto = gerarNumeroAleatorio(quantidadeNumerosAleatorios)
tentativas = 1


function verificarChute(){
    let tentativa = tentativas == 1 ? 'tentativa' : 'tentativas'
    let chute = document.querySelector('input').value;
    let mensagem = `Você acertou com ${tentativas} ${tentativa}!`
    console.log(chute == numSecreto);
    if(chute == numSecreto){
        
        criaEditorHtml('h1', 'Parabéns')
        criaEditorHtml('p',mensagem)
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if(chute < numSecreto){
            criaEditorHtml('p', 'tente um número maior!')
        } else {criaEditorHtml('p', 'tente um número menor!')}
        tentativas++ 
        limparCampo()

    }   
}

function criaEditorHtml(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirTelaInicial(){
    criaEditorHtml('h1', 'Hora do desafio!')
    criaEditorHtml('p', `Escolha um número de 1 a ${quantidadeNumerosAleatorios}`)
}
exibirTelaInicial()



function gerarNumeroAleatorio(quantidadeNumerosAleatorios){
    let numEscolhido =  parseInt(Math.random() * quantidadeNumerosAleatorios +1)
    if(numSorteados.length == quantidadeNumerosAleatorios){
        numSorteados = []
    }
    if(numSorteados.includes(numEscolhido)){
         return gerarNumeroAleatorio(quantidadeNumerosAleatorios)
    } else {
        console.log(numSorteados)
        numSorteados.push(numEscolhido)
        return numEscolhido
    }
    
}

console.log(numSecreto)

function limparCampo(){
    chute = document.querySelector('input')
    chute.value  = ''

}

function reiniciarJogo(){
    numSecreto = gerarNumeroAleatorio(10)
    // gera um novo número aleatório
    console.log(numSecreto)
    limparCampo()
    // limpa o campo input
    tentativas = 1
    //faz as tentativas voltar para 1
    exibirTelaInicial() // exibe a tela inicial

    document.getElementById('reiniciar').setAttribute('disabled', true)


}