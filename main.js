let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qualo seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja muito Bem Vindo, Mas Custava Escrever o Nome?"
}else{elemento.textContent = nomeUsuário;}

