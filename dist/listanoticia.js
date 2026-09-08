import { Noticia } from "./classes/noticia.js";
window.onload = () => {
    let listaNoticias = Noticia.listar();
    let tabela = document.getElementById("tabelaNoticias");
    tabela.innerHTML = "";
    //cabeçalho da tabela
    let linha = tabela.insertRow();
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
    listaNoticias.forEach(noticia => {
        linha = tabela.insertRow();
        linha.insertCell().textContent = noticia.titulo;
        linha.insertCell().textContent = noticia.conteudo;
        linha.insertCell().textContent = noticia.data;
    });
};
//# sourceMappingURL=listanoticia.js.map