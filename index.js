var nome = "Thiago Leão Freire";
var cargo = "Desenvolvedor";
var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    texto2.style.display = "none";
    texto1.style.display = "block";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);