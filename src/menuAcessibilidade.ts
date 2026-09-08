export const carregarMenuAcessibilidade= async() =>{
const divMenuAcessibilidade =document.getElementById("divMenuAcessibilidade") as HTMLDivElement; 

//carregar o arquivo Menu Acessibilidade.html

const conteudo = await fetch("menuAcessibilidade.html");

//Converter o conteudo para texto.

const html = await conteudo.text();

//Inserir o html no Menu Acessibilidade.
divMenuAcessibilidade.innerHTML = html;

const btnAcessibilidade= document.getElementById("btnAcessibilidade") as HTMLButtonElement;
btnAcessibilidade.addEventListener("click", ()=>{
    const menuAcessibilidade= document.getElementById("menuAcessibilidade") as HTMLDivElement;
    menuAcessibilidade.hidden = !menuAcessibilidade.hidden;   
    btnAcessibilidade.setAttribute("aria-expanded", String(!menuAcessibilidade.hidden))
    
});

const btnAumentarFonte = document.getElementById("btnAumentarFonte") as HTMLElement;
btnAumentarFonte.addEventListener("click", () =>{
let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
tamanhoFonte += 2;
document.body.style.fontSize = tamanhoFonte + "px";
}); 

const btnDiminuirFonte = document.getElementById("btnDiminuirFonte") as HTMLElement;
btnDiminuirFonte.addEventListener("click", () =>{
let tamanhoFonte = parseInt(document.body.style.fontSize) || 16;
tamanhoFonte -= 2;
document.body.style.fontSize = tamanhoFonte + "px";
}); 

const btnAlterarContraste = document.getElementById("btnAlterarContraste") as HTMLElement;
btnAlterarContraste.addEventListener("click", () =>{
document.body.classList.toggle("contraste");
});
}
carregarMenuAcessibilidade();
