export const carregarRodape = async() =>{
const rodape =document.getElementById("rodape") as HTMLDivElement; 

//carregar o arquivo rodape.html

const conteudo = await fetch("rodape.html");

//Converter o conteudo para texto.

const html = await conteudo.text();

//Inserir o html no rodapé.

rodape.innerHTML = html;

};

carregarRodape();