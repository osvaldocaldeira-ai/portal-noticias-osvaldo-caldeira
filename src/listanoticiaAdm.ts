import {Noticia} from "./classes/noticia.js"
window.onload= () => {

    let listaNoticias= Noticia.listar();
    let tabela=document.getElementById("tabelaNoticias") as HTMLTableElement;

tabela.innerHTML= "";
    //cabeçalho da tabela

    let linha= tabela.insertRow();

    let thtitulo = document.createElement("th");
    thtitulo.textContent = "Título";
    linha.appendChild(thtitulo);

    let thconteudo = document.createElement("th");
    thconteudo.textContent = "Conteúdo";
    linha.appendChild(thconteudo);
    
        let thdata = document.createElement("th");
        thdata.classList.add("data");
    thdata.textContent = "Data";
    linha.appendChild(thdata);

let thAcoes = document.createElement("th");
thAcoes.textContent= "Ações";
thAcoes.colSpan = 2;
linha.appendChild(thAcoes);

listaNoticias.forEach(noticia => {
    linha= tabela.insertRow();
    linha.insertCell().textContent= noticia.titulo;
    linha.insertCell().textContent= noticia.conteudo;
    linha.insertCell().textContent= noticia.data;

let btnExcluir = document.createElement("button");
btnExcluir.textContent = "Excluir";

btnExcluir.addEventListener("click", () =>{
if(confirm("Deseja realmente excluir a notícia: " + noticia.titulo + "?")){
Noticia.excluir(noticia.id);
alert("Notícia excluída com sucesso.");
window.location.reload();
    }
    });

    linha.insertCell().appendChild(btnExcluir);

let btnAlterar = document.createElement("button");
btnAlterar.textContent = "Alterar";
btnAlterar.addEventListener("click", () => {
window.location.href = `cadNoticias.html?id=${noticia.id}`;
});

linha.insertCell().appendChild(btnAlterar);

});
}


