/*
//principais váriaveis 
let player, winner = null;
let playerSelected = document.getElementById("jogador-selecionado");
let winnerSelected = document.getElementById("vencedor-selecionado");
let squares = document.getElementsByClassName('.square-style');


changePlayer(valor = 'X');


function buttonClicked(id){
    
    let square = document.getElementById(id);

    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = 'blue';

    if(player === "X"){
        player = "O";
    }else{
        player = "X";
    }

    changePlayer(player);
    checkWinner()
}

function changePlayer(valor){
    player = valor;
    playerSelected.innerHTML = player;
}

function checkWinner(){
    let square1 = document.getElementById(1);
    let square2 = document.getElementById(2);
    let square3 = document.getElementById(3);
    let square4 = document.getElementById(4);
    let square5 = document.getElementById(5);
    let square6 = document.getElementById(6);
    let square7 = document.getElementById(7);
    let square8 = document.getElementById(8);
    let square9 = document.getElementById(9);

    if(checkLineWin(square1, square2, square3)){
        changeColorSquare(square1, square2, square3);
        changeWinner(square1);
        return;
    }
    if(checkLineWin(square4, square5, square6)){
        changeColorSquare(square4, square5, square6);
        changeWinner(square4);
        return;
    }
    if(checkLineWin(square7, square8, square9)){
        changeColorSquare(square7, square8, square9);
        changeWinner(square7)
        return;
    }
    if(checkLineWin(square1, square4, square7)){
        changeColorSquare(square1, square4, square7);
        changeWinner(square1)
        return;
    }
    if(checkLineWin(square2, square5, square8)){
        changeColorSquare(square2, square5, square8);
        changeWinner(square2)
        return;
    }
    if(checkLineWin(square3, square6, square9)){
        changeColorSquare(square3, square6, square9);
        changeWinner(square3)
        return;
    }
    if(checkLineWin(square1, square5, square9)){
        changeColorSquare(square1, square5, square9);
        changeWinner(square1)
        return;
    }
    if(checkLineWin(square3, square5, square7)){
        changeColorSquare(square3, square5, square7);
        changeWinner(square3);
    }
}   

function changeWinner(square){
    winner = square.innerHTML;
    winnerSelected.innerHTML = winner;
}

function changeColorSquare(){
    square1.style.color = 'green';
    square2.style.color = 'green';
    square3.style.color = 'green';
}

function checkLineWin(square1, square2, square3){
    let equal = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        equal = true;
    }

    return equal;
}*/

var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}